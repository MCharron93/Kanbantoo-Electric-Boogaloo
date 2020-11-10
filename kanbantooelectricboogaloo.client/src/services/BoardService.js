import { api } from './AxiosService'
import { AppState } from '../AppState'
// import router from '../router'

class BoardService {
  async getBoards() {
    try {
      const res = await api.get('/boards')
      AppState.boards = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const boardService = new BoardService()
