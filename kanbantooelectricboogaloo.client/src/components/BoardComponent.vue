<template>
  <div class="board-component col-sm-3 mt-3 card radius20 shadow">
    <div class="row justify-content-between d-flex p-2">
      <router-link :to="{name: 'ActiveBoardPage', params: {boardId: boardProp._id}}">
        <h2>{{ boardProp.title }}</h2>
      </router-link>
      <button class="border-0 bg-transparent" @click="removeBoard">
        <i class="fas fa-times fa-lg"></i>
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
a {
  color: #2f2f2f;
  size: 12px;
}
a:hover{
color: rgba(5, 228, 105, 0.925);
}
</style>
