<template>
  <div class="board-component col-2 pt-3 card radius20 shadow text-center pb-1">
    <h2 class="d-flex justify-content-between">
      {{ boardProp.title }}
      <button class="border-0 bg-transparent">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </h2>
  </div>
</template>

<script>
import { } from 'vue'
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
