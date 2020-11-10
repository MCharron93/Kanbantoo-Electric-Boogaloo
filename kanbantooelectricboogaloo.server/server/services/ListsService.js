import { dbContext } from '../db/DbContext'

class ListsService {
  async deleteList(id) {
    const deletedList = await dbContext.Lists.findByIdAndDelete(id)
    return deletedList
  }

  async getListsByBoard(id) {
    return await dbContext.Lists.find({ boardId: id })
  }

  async createList(list) {
    return await dbContext.Lists.create(list)
  }
}

export const listsService = new ListsService()
