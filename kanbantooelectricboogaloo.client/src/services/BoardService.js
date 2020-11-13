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
      // console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createBoard(newBoard) {
    try {
      await api.post('/boards/', newBoard)
      // console.log(res.data)
      this.getBoards()
    } catch (error) {
      logger.error(error)
    }
  }

  async removeBoard(boardId) {
    try {
      await api.delete('/boards/' + boardId)
      this.getBoards()
    } catch (error) {
      logger.error(error)
    }
  }

  async showActiveBoard(boardId) {
    try {
      const newActiveBoard = AppState.boards.find(b => b._id === boardId)
      // logger.log(newActiveBoard.title)
      AppState.activeBoard = newActiveBoard
      // logger.log('hello active board')
    } catch (error) {
      logger.error(error)
    }
  }
  // LIST FUNCTIONS

  async getLists(boardId) {
    try {
      const res = await api.get('/boards/' + boardId + '/lists')
      AppState.activeBoardLists = res.data
      // logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteList(listData) {
    try {
      await api.delete('/lists/' + listData._id)
      this.getLists(listData.boardId)
    } catch (error) {
      logger.error(error)
    }
  }

  async createList(newList) {
    try {
      await api.post('/lists/', newList)
      this.getLists(newList.boardId)
    } catch (error) {
      logger.error(error)
    }
  }

  // TASK FUNCTIONS

  async getTasks(listId) {
    try {
      const res = await api.get('/lists/' + listId + '/tasks')
      AppState.tasks[listId] = res.data
      // logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async addTask(task) {
    try {
      await api.post('/tasks/', task)
      this.getTasks(task.listId)
      // console.log(res.data)
    } catch (error) {
      logger.log(error)
    }
  }

  async moveTask(listId, taskProps) {
    try {
      const oldListId = taskProps.listId
      taskProps.listId = listId
      await api.put('tasks/' + taskProps._id, taskProps)
      this.getTasks(taskProps.listId)
      this.getTasks(oldListId)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteTask(taskData) {
    try {
      await api.delete('/tasks/' + taskData._id)
      this.getTasks(taskData.listId)
    } catch (error) {
      logger.error(error)
    }
  }

  // COMMENT FUNCTIONS

  async getComments(taskId) {
    try {
      const res = await api.get('/tasks/' + taskId + '/comments')
      AppState.comments[taskId] = res.data
      // console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async createComment(newComment) {
    try {
      await api.post('/comments/', newComment)
      this.getComments(newComment.taskId)
      // console.log(newComment)
    } catch (error) {
      logger.log(error)
    }
  }

  async deleteComment(commentData) {
    try {
      await api.delete('/comments/' + commentData._id)
      this.getComments(commentData.taskId)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardService = new BoardService()
