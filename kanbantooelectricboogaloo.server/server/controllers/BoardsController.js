import { Auth0Provider } from '@bcwdev/auth0provider'
// import { profilesService } from '../services/ProfilesService'
import BaseController from '../utils/BaseController'
import { boardsService } from '../services/BoardsService'

export class BoardsController extends BaseController {
  constructor() {
    super('/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', profilesService.getProfile)
      .get('', this.getUserBoards)
      .post('', this.createBoard)
      .delete('/:id', this.deleteBoard)
  }

  async deleteBoard(req, res, next) {
    try {
      // req.body.creatorId = req.userInfo.id
      res.send(await boardsService.deleteBoard(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createBoard(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await boardsService.createBoard(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getUserBoards(req, res, next) {
    try {
      const boards = await boardsService.getUserBoards()
      res.send(boards)
    } catch (error) {
      next(error)
    }
  }
}
