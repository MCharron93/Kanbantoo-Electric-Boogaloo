import { dbContext } from '../db/DbContext'

class BoardsService {
  // async getActiveBoard(id) {
  //   const activeBoard = await dbContext.Boards.findById(b => b._id === id)
  //   return activeBoard
  // }

  async deleteBoard(id) {
    const deletedBoard = await dbContext.Boards.findOneAndDelete(id)
    return deletedBoard
  }

  async createBoard(boardTitle) {
    return await dbContext.Boards.create(boardTitle)
  }

  async getUserBoards(id) {
    try {
      const boards = await dbContext.Boards.find({ creatorId: id })
      return boards
    } catch (error) {
      console.error(error)
    }
  }
}

export const boardsService = new BoardsService()
