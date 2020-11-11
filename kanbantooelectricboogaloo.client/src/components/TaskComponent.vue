<template>
  <div class="task-component">
    <p>{{ taskProp.body }}</p>
    <!-- <p>task</p> -->
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
