<template>
  <div class="activeboard-page container-fluid">
    <div class="row pt-5">
      <div class="col-12 jumbotron-fluid text-center">
        <div class="container">
          <h3 class="display-4 text-light">
            {{ activeBoard.title }}
          </h3>
          <p class="lead text-light">
            Welcome to your board!
          </p>
          <button type="button" class="btn border-0 background-none text-light rounded-pill" data-toggle="modal" data-target="#listModal">
            Add a new list <i class="fas fa-plus ml-2"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-around pt-3">
      <ListComponent v-for="l in lists" :key="l.body" :list-prop="l" />
    </div>
  </div>

  <div class="modal fade"
       id="listModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="listModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="listModalLabel">
            List Title
          </h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createList">
            <div class="col-8 offset-2 my-2">
              <input type="text" placeholder="List name" class="form-control" v-model="state.newList.body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn border-0 bg-transparent" data-dismiss="modal">
                Close    <i class="fas fa-window-close fa-lg ml-2"></i>
              </button>
              <button type="submit" class="btn border-0 bg-transparent">
                Create List <i class="fas fa-clipboard-list fa-lg ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import { useRoute } from 'vue-router'
import ListComponent from '../components/ListComponent'

export default {
  name: 'ActiveBoardPage',
  components: { ListComponent },
  props: {
    boardProp: Object
  },
  setup(props) {
    const route = useRoute()
    const state = reactive({
      newList: {
        boardId: route.params.boardId
      }
    })
    onMounted(async() => {
      await boardService.getBoards()
      await boardService.showActiveBoard(route.params.boardId)
      await boardService.getLists(route.params.boardId)
    })

    return {
      state,
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.activeBoardLists),
      comments: computed(() => AppState.comments),
      createList() {
        boardService.createList(state.newList)
        state.newList.body = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.activeboard-page {
  background: linear-gradient(#e66465, #9198e5);
}
// .jumbotron {
//   background: linear-gradient(#C2CEE2, #F4F4FA);
// }
</style>
