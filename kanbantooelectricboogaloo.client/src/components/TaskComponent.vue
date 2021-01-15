<template>
  <div class="task-component ml-2 mr-2 pb-2 pt-2">
    <div class="row shadow radius20 d-flex align-items-center">
      <div class="col-10 pt-3">
        <p>{{ taskProp.body }}</p>
      </div>
      <div class="col-2">
        <button class="btn bg-transparent border-0 text-dark"
                type="button"
                data-toggle="collapse"
                :data-target="'#collapseExp' + taskProp._id"
                aria-expanded="false"
                aria-controls="collapseExample"
        >
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="collapse" :id="'collapseExp' + taskProp._id">
    <div id="accordion">
      <div class="row justify-content-around">
        <div class="col-3">
          <div id="headingOne">
            <button class="btn btn-link text-success" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <i class="fas fa-comment"></i>
            </button>
          </div>
        </div>

        <div class="col-3">
          <div id="headingTwo">
            <button class="btn btn-link collapsed text-dark" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <i class="fas fa-trash-alt" @click="deleteTask"></i>
            </button>
          </div>
        </div>

        <div class="col-3">
          <div id="headingThree">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
              <i class="fas fa-share"></i>
            </button>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="v-model-select" class="row justify-content-center">
      <select @change.prevent="moveTask" v-model="state.selected" id="collapsethree">
        <option disabled value="" class="border-0">
          Move lists...
        </option>
        <option class="text-light" v-for="l in lists" :key="l" :value="l._id">
          {{ l.body }}
        </option>
      </select>
    </div>
    <div class="col-12 pt-1">
      <!-- Comment Component -->
      <comment-component v-for="c in comments" :key="c" :comment-prop="c" />
      <div class="row justify-content-center text-center">
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <form class="form-group" @submit.prevent="createComment">
            <input class="form-control border-0 text-center" type="text" placeholder="Enter Comment" v-model="state.newComment.body">
          </form>
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
      },
      deleteTask() {
        boardService.deleteTask(props.taskProp)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
