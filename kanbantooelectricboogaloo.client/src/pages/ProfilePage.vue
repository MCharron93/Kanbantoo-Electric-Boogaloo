<template>
  <div class="about text-center justify-content-center container-fluid">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded radius50" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>

    <!-- MODAL FOR ADDING BOARD -->

    <button type="button" class="btn btn-primary border-0 background-none" data-toggle="modal" data-target="#boardModal">
      Add a board
    </button>

    <div class="modal fade"
         id="boardModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="boardModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="boardModalLabel">
              What do you want to name your board?
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createBoard" action="">
              <div class="col-8 offset-2 my-2">
                <input type="text" placeholder="Board Title" class="form-control" v-model="state.newBoard.title">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Create Board
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around text-center">
      <board-component @click="showActiveBoard(b.id)" v-for="b in boards" :key="b.title" :board-prop="b" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import BoardComponent from '../components/BoardComponent'
import { useRoute } from 'vue-router'
import router from '../router'

export default {
  name: 'Profile',
  components: { BoardComponent },
  setup() {
    const route = useRoute()
    const state = reactive({
      newBoard: {}
    })
    onMounted(() => boardService.getBoards())
    // onMounted(() => {
    //   boardService.showActiveBoard(route.params.boardId)
    // })
    return {
      state,
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards),
      createBoard(newBoard) {
        boardService.createBoard(state.newBoard)
        console.log(state.newBoard.title)
      },
      removeBoard() {
        boardService.removeBoard(route.params.boardId)
        console.log('board removed')
      },
      showActiveBoard(id) {
        boardService.showActiveBoard(id)
        console.log('trying to show board')
        router.push({ name: 'ActiveBoardPage', params: { boardId: id } })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
