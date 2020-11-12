<template>
  <div class="task-component">
    <p class="d-flex justify-content-between shadow radius20 py-1 align-items-center">
      {{ taskProp.body }}
      <i class="fas fa-arrow-right mr-3"></i>
      <comment-component />
    </p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { CommentComponent } from '../components/CommentComponent'
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
  components: { CommentComponent }
}
</script>

<style lang="scss" scoped>

</style>
