import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
// import router from '../router'

class BoardService {
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
      AppState.boards = AppState.boards.filter(b => b.id !== boardId)
    } catch (error) {
      logger.error(error)
    }
  }

  async showActiveBoard(boardId) {
    try {
      const res = await api.get('/boards/' + boardId)
      AppState.activeBoard = res.data
      console.log('hello active board')
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardService = new BoardService()
