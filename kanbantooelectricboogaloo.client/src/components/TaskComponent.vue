<template>
  <div class="task-component">
    <!-- <p class="d-flex justify-content-between shadow radius20 py-1 align-items-center">
      {{ taskProp.body }}
      <button class="btn border-0 bg-transparent" data-toggle="collapse">
        <i class="fas fa-arrow-right mr-3"></i>
      </button>
    </p> -->
    <p class="d-flex justify-content-between shadow radius20 py-1 align-items-center">
      {{ taskProp.body }}
      <button class="btn btn-primary bg-transparent border-0 text-dark"
              type="button"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
      >
        <i class="fas fa-arrow-right mr-3"></i>
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Ay oh!
      </div>
    </div>

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
