import { dbContext } from '../db/DbContext'

class TasksService {
  async moveTask(id, updatedInfo) {
    return await dbContext.Tasks.findByIdAndUpdate(id, updatedInfo, { new: true })
  }

  async deleteTask(id) {
    return await dbContext.Tasks.findByIdAndDelete(id)
  }

  async getTasksbyList(id) {
    return await dbContext.Tasks.find({ listId: id })
  }

  async createTask(body) {
    return await dbContext.Tasks.create(body)
  }
}

export const tasksService = new TasksService()
