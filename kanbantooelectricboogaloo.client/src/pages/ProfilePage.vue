<template>
  <div class="profile text-center container-fluid">
    <div class="row justify-content-center text-center">
      <div class="radius50 col-md-6">
        <h2 class="display-4 text-light pt-3">
          Welcome, {{ profile.name.split('@').splice(0,1).join('') }}!
        </h2>
        <div class="pt-3">
          <img class="rounded-circle" :src="profile.picture" alt="" />
          <p class="lead text-light pt-3">
            {{ profile.email.split('@').splice(0,1).join('') }}
          </p>
          <div class="">
            <button type="button" class="btn border-0 background-none text-light" data-toggle="modal" data-target="#boardModal">
              Add a board <i class="fas fa-plus ml-2"></i>
            </button>
          </div>
        </div>
        <!-- MODAL FOR ADDING BOARD -->
      </div>
    </div>
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
              <div class="row justify-content-center">
                <div class="col-md-10 my-2">
                  <input type="text" placeholder="Board Title" class="form-control" v-model="state.newBoard.title">
                </div>
                <div class="col">
                  <div class="modal-footer">
                    <button type="button" class="btn border-0" data-dismiss="modal">
                      Close
                    </button>
                    <button type="submit" class="btn border-0">
                      Create Board
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between ml-2 mr-2">
      <board-component v-for="b in boards" :key="b.title" :board-prop="b" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import BoardComponent from '../components/BoardComponent'
import router from '../router'
import { profileService } from '../services/ProfileService'

export default {
  name: 'Profile',
  components: { BoardComponent },
  setup() {
    const state = reactive({
      newBoard: {}
    })
    onMounted(() => {
      profileService.getProfile()
      boardService.getBoards()
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards),
      createBoard() {
        boardService.createBoard(state.newBoard)
        console.log(state.newBoard.title)
      },
      showActiveBoard(id) {
        boardService.showActiveBoard(id)
        // console.log('trying to show board')
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
.profile{
  background: linear-gradient( #22A8D9, #FFF43C);
}
</style>
