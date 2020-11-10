import { dbContext } from '../db/DbContext'

class BoardsService {
  async createBoard(boardTitle) {
    return await dbContext.Boards.create(boardTitle)
  }

  async getUserBoards() {
    const boards = await dbContext.Boards.find()
    return boards
  }
}

export const boardsService = new BoardsService()
