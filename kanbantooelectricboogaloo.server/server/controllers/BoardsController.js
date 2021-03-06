import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { boardsService } from '../services/BoardsService'
import { listsService } from '../services/ListsService'

export class BoardsController extends BaseController {
  constructor() {
    super('/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', profilesService.getProfile)
      // .get('/:boardId', this.getActiveBoard)
      .get('', this.getUserBoards)
      .get('/:boardId/lists', this.getListsByBoard)
      .post('', this.createBoard)
      // .put('/:boardId', this.changeBoardName)
      .delete('/:id', this.deleteBoard)
  }

  // async changeBoardName(req, res, next) {
  //   try {
  //     res.send(await boardsService.changeBoardName(req.params.id, req.body))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async deleteBoard(req, res, next) {
    try {
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

  async getListsByBoard(req, res, next) {
    try {
      res.send(await listsService.getListsByBoard(req.params.boardId))
    } catch (error) {
      next(error)
    }
  }

  async getUserBoards(req, res, next) {
    try {
      const creatorId = req.userInfo.id
      const boards = await boardsService.getUserBoards(creatorId)
      res.send(boards)
    } catch (error) {
      next(error)
    }
  }
}
