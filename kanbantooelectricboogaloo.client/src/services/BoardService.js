import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
// import router from '../router'

class BoardService {
  // BOARD FUNCTIONS
  async getBoards() {
    try {
      const res = await api.get('/boards')
      AppState.boards = res.data
      console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createBoard(newBoard) {
    try {
      const res = await api.post('/boards/', newBoard)
      console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async removeBoard(boardId) {
    try {
      await api.delete('/boards/' + boardId)
      this.getBoards()
      // AppState.boards = AppState.boards.filter(b => b._id !== boardId)
    } catch (error) {
      logger.error(error)
    }
  }

  async showActiveBoard(boardId) {
    try {
      const newActiveBoard = AppState.boards.find(b => b._id === boardId)
      // logger.log(newActiveBoard.title)
      AppState.activeBoard = newActiveBoard
      console.log('hello active board')
    } catch (error) {
      logger.error(error)
    }
  }
  // LIST FUNCTIONS

  async getLists(boardId) {
    try {
      const res = await api.get('/boards/' + boardId + '/lists')
      AppState.activeBoardLists = res.data
      console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createList() {
    try {

    } catch (error) {

    }
  }

  // TASK FUNCTIONS

  async getTasks(listId) {
    try {
      const res = await api.get('/lists/' + listId + '/tasks')
      logger.log(res.data)
    } catch (error) {

    }
  }
}

export const boardService = new BoardService()
