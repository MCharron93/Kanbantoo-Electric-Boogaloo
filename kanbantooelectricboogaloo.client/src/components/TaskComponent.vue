<template>
  <div class="task-component">
    <p class="d-flex justify-content-between shadow radius20 py-1">
      {{ taskProp.body }}
      <i class="fas fa-arrow-right"></i>
    </p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
// import { boardService } from '../services/BoardService'
// import {AppState } from '../AppState'

export default {
  name: 'TaskComponent',
  props: {
    taskProp: Object
  },
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      tasks: computed(() => props.taskProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
