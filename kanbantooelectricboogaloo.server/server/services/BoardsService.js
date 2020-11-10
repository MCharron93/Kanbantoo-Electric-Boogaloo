import { dbContext } from '../db/DbContext'

class BoardsService {
  async deleteBoard(id) {
    const deletedBoard = await dbContext.Boards.findOneAndDelete(id)
    return deletedBoard
  }

  async createBoard(boardTitle) {
    return await dbContext.Boards.create(boardTitle)
  }

  async getUserBoards() {
    try {
      const boards = await dbContext.Boards.find()
      return boards
    } catch (error) {
      console.error(error)
    }
  }
}

export const boardsService = new BoardsService()
