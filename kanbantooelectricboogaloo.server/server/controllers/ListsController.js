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
      .delete('/:id', this.deleteList)
  }

  async getTasksByList(req, res, next) {
    try {
      res.send(await tasksService.getTasksbyList(req.params.listId))
    } catch (error) {
      next(error)
    }
  }

  async deleteList(req, res, next) {
    try {
      res.send(await listsService.deleteList(req.params.id))
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
