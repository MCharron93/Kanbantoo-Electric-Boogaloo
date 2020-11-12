<template>
  <div class="activeboard-page container-fluid">
    <div class="row">
      <div class="col-12 jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h3 class="display-4">
            {{ activeBoard.title }}
          </h3>
          <p class="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi.
          </p>
          <button type="button" class="btn btn-primary border-0 background-none" data-toggle="modal" data-target="#listModal">
            Create List
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
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
          <h5 class="modal-title" id="listModalLabel">
            List Title
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createList" action="">
            <div class="col-8 offset-2 my-2">
              <input type="text" placeholder="List Title" class="form-control" v-model="state.newList.body">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Create List
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
        // state.newList.boardId = route.params.boardId
        boardService.createList(state.newList)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
