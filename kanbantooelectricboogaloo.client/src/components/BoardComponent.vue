<template>
  <div class="board-component col-2 pt-3 card radius20 shadow text-center pb-1">
    <div class="d-flex justify-content-between">
      <router-link :to="{name: 'ActiveBoardPage', params: {boardId: boardProp._id}}">
        <h2>{{ boardProp.title }}</h2>
      </router-link>
      <button class="border-0 bg-transparent" @click="removeBoard">
        <i class="fas fa-ellipsis-h fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { boardService } from '../services/BoardService'
export default {
  name: 'BoardComponent',
  props: {
    boardProp: Object
  },
  components: {},
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      removeBoard() {
        boardService.removeBoard(props.boardProp._id)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
