import { dbContext } from '../db/DbContext'

class CommentsService {
  async createComment(body) {
    return await dbContext.Comments.create(body)
  }

  async deleteComment(id) {
    return await dbContext.Comments.findByIdAndDelete(id)
  }

  async getCommentsByTask(id) {
    return await dbContext.Comments.find({ taskId: id })
  }
}

export const commentsService = new CommentsService()
