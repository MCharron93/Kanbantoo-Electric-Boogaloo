<template>
  <div class="task-component">
    <p class="d-flex justify-content-between shadow radius20 py-1 align-items-center">
      {{ taskProp.body }}
      <button class="btn bg-transparent border-0 text-dark"
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
        <comment-component v-for="c in comments" :key="c" :comment-prop="c" />
        <form class="form-group" @submit.prevent="createComment">
          <input class="form-control" type="text" placeholder="Enter Comment" v-model="state.newComment.body">
          <button class="btn btn-transparent text-success">
            <i class="fas fa-comment"></i>
          </button>
        </form>
        <div id="v-model-select" class="demo">
          <select @change.prevent="moveTask" v-model="state.selected">
            <option disabled value="">
              Move lists...
            </option>
            <option class="text-light" v-for="l in lists" :key="l" :value="l._id">
              {{ l.body }}
            </option>
          </select>
        </div>
      </div>
    </div>
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
    // listProp: Object
  },
  setup(props) {
    const state = reactive({
      newComment: {
        listId: props.taskProp.listId,
        taskId: props.taskProp._id
      },
      selected: ''
    })
    onMounted(() => {
      boardService.getComments(props.taskProp._id)
    })
    return {
      state,
      tasks: computed(() => props.taskProp),
      comments: computed(() => AppState.comments[props.taskProp._id]),
      lists: computed(() => AppState.activeBoardLists),
      createComment() {
        boardService.createComment(state.newComment)
      },
      moveTask() {
        boardService.moveTask(state.selected, props.taskProp)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
