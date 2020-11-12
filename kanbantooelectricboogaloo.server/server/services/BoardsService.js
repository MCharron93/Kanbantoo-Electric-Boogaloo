import { dbContext } from '../db/DbContext'

class BoardsService {
  // async changeBoardName(id, updatedInfo) {
  //   const changedBoard = await dbContext.Boards.findByIdAndUpdate(id, updatedInfo)
  //   return changedBoard
  // }

  async deleteBoard(id) {
    const deletedBoard = await dbContext.Boards.findByIdAndDelete(id)
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
