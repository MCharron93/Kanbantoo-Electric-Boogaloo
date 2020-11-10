import { dbContext } from '../db/DbContext'

class BoardsService {
  async getUserBoards(id) {
    const boards = await dbContext.Boards.find(id)
    return boards
  }
}

export const boardsService = new BoardsService()
