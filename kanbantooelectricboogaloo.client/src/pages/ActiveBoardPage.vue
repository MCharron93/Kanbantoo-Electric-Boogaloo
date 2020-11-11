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
        </div>
      </div>
      <div class="col-6">
        <ListComponent v-for="l in lists" :key="l.body" :list-prop="l" />
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
  setup() {
    const route = useRoute()
    const state = reactive({

    })
    onMounted(async() => {
      await boardService.getBoards()
      await boardService.showActiveBoard(route.params.boardId)
      await boardService.getLists(route.params.boardId)
    })

    return {
      state,
      activeBoard: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.activeBoardLists)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
