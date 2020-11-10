import { dbContext } from '../db/DbContext'

class ListsService {
  async createList(list) {
    return await dbContext.Lists.create(list)
  }
}

export const listsService = new ListsService()
