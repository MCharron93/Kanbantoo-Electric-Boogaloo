import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { listsService } from '../services/ListsService'
import { tasksService } from '../services/TasksService'

export class ListsController extends BaseController {
  constructor() {
    super('/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:listId/tasks', this.getTasksByList)
      .post('', this.createList)
      .put('/:listId', this.updateList)
      .delete('/:listId', this.deleteList)
  }

  async updateList(req, res, next) {
    try {
      res.send(await listsService.updateList(req.params.listId, req.body))
    } catch (error) {
      next(error)
    }
  }

  // Consider moving over to board controller, make one call to the API to load tasks into AppState
  async getTasksByList(req, res, next) {
    try {
      res.send(await tasksService.getTasksbyList(req.params.listId))
    } catch (error) {
      next(error)
    }
  }

  async deleteList(req, res, next) {
    try {
      res.send(await listsService.deleteList(req.params.listId))
    } catch (error) {
      next(error)
    }
  }

  async createList(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await listsService.createList(req.body))
    } catch (error) {
      next(error)
    }
  }
}
