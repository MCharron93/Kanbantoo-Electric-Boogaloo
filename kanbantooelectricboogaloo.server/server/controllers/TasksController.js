import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'
import { tasksService } from '../services/TasksService'
import { commentsService } from '../services/CommentsService'

export class TasksController extends BaseController {
  constructor() {
    super('tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:taskId/comments', this.getCommentsByTask)
      .post('', this.createTask)
      .put('/:taskId', this.moveTask)
      .delete('/:taskId', this.deleteTask)
  }

  async getCommentsByTask(req, res, next) {
    res.send(await commentServivce.getCommentsByTask())
  }

  async moveTask(req, res, next) {
    try {
      res.send(await tasksService.moveTask(req.params.taskId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteTask(req, res, next) {
    try {
      res.send(await tasksService.deleteTask(req.params.taskId))
    } catch (error) {
      next(error)
    }
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
