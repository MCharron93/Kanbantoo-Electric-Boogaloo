<template>
  <div class="task-component">
    <p class="d-flex justify-content-between shadow radius20 py-1 align-items-center">
      {{ taskProp.body }}
      <i class="fas fa-arrow-right mr-3" @click="moveTask"></i>
    </p>
    <form class="form-group" @submit.prevent="createComment">
      <input class="form-control" type="text" placeholder="Enter Comment" v-model="state.newComment.body">
      <button class="btn btn-transparent text-success">
        <i class="fas fa-comment"></i>
      </button>
    </form>
    <comment-component v-for="c in comments" :key="c" :comment-prop="c" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { CommentComponent } from '../components/CommentComponent'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'

export default {
  name: 'TaskComponent',
  components: { CommentComponent },
  props: {
    taskProp: Object
  },
  setup(props) {
    const state = reactive({
      newComment: {
        listId: props.taskProp.listId,
        taskId: props.taskProp._id
      }
    })
    onMounted(() => {
      boardService.getComments(props.taskProp._id)
    })
    return {
      state,
      tasks: computed(() => props.taskProp),
      comments: computed(() => AppState.comments[props.taskProp._id]),
      createComment() {
        boardService.createComment(state.newComment)
      },
      moveTask() {
        boardService.moveTask(props.taskProp)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
