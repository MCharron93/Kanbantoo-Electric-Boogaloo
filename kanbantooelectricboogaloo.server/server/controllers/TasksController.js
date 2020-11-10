import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { tasksService } from '../services/TasksService'

export class TasksController extends BaseController {
  constructor() {
    super('tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTask)
      .delete('/:id', this.deleteTask)
  }

  deleteTask(arg0, deleteTask) {
    throw new Error('Method not implemented.')
  }

  async createTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await tasksService.createTask(req.body))
    } catch (error) {
      next(error)
    }
  }
}