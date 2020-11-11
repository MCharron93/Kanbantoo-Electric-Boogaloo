<template>
  <div class="activeboard-page container-fluid">
    <div class="row">
      <div class="col">
        <h5>{{ activeBoard.title }}</h5>
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
