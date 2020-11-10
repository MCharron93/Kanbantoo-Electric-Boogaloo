import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { listsService } from '../services/ListsService'

export class ListsController extends BaseController {
  constructor() {
    super('/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getListsByBoard)
      .post('', this.createList)
  }

  async createList(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await listsService.createList(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getListsByBoard(req, res, next) {
    try {
      res.send(await listsService.getListsByBoard())
    } catch (error) {
      next(error)
    }
  }
}