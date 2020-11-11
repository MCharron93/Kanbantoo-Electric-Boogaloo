<template>
  <div class="activeboard-page container-fluid">
    <div class="row">
      <div class="col jumbotron jumbotron-fluid text-center">
        <div class="container">
          <h1 class="display-4">
            {{ activeBoard.title }}
          </h1>
          <p class="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sequi.
          </p>
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

export default {
  name: 'ActiveBoardPage',
  setup() {
    const route = useRoute()
    const state = reactive({

    })
    onMounted(async() => {
      await boardService.getBoards()
      await boardService.showActiveBoard(route.params.boardId)
    })

    return {
      state,
      boards: computed(() => AppState.boards),
      activeBoard: computed(() => AppState.activeBoard)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
