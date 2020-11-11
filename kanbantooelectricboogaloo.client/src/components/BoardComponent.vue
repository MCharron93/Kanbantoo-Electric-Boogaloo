<template>
  <div class="board-component col-2 pt-3 card radius20 shadow text-center pb-1">
    <h5 class="d-flex justify-content-between">
      {{ boardProp.title }}
      <button class="border-0 bg-transparent">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </h5>
  </div>
</template>

<script>
import { } from 'vue'
// import { boardService } from '../services/BoardService'
// import { useRoute } from 'vue-router'
export default {
  name: 'BoardComponent',
  props: ['boardProp'],
  components: {},
  setup(props) {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>

</style>
