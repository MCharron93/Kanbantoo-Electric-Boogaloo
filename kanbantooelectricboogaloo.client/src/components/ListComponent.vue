<template>
  <div class="list-component col-md-2 pt-3 card radius20 shadow pb-2 my-2 ml-3 mr-3">
    <div class="">
      <h2 class="d-flex justify-content-between">
        {{ listProp.body }}
        <button class="border-0 bg-transparent" @click="removeBoard">
          <i class="fas fa-times fa-lg"></i>
        </button>
      </h2>
      <!-- TASK COMPONENT FOR DRAWING TASKS -->
      <task-component v-for="t in tasks" :key="t" :task-prop="t" />
    </div>
    <!-- ADD TASK INPUT -->
    <form class="form-group d-flex justify-content-center mt-2" @submit.prevent="addTask">
      <button class="btn border-0 bg-transparent" type="submit">
        <i class="fas fa-plus"></i>
      </button>
      <input class="border-0"
             type="text"
             name="task"
             placeholder="Add a task..."
             v-model="state.newTask.body"
      >
    </form>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { boardService } from '../services/BoardService'
import { TaskComponent } from '../components/TaskComponent'
export default {
  name: 'ListComponent',
  props: {
    listProp: Object
  },
  components: { TaskComponent },
  setup(props) {
    // const route = useRoute()
    const state = reactive({
      newTask: {
        listId: props.listProp._id
      }
    })
    onMounted(async() => {
      await boardService.getTasks(props.listProp._id)
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      lists: computed(() => props.listProp),
      tasks: computed(() => AppState.tasks[props.listProp._id]),
      addTask() {
        boardService.addTask(state.newTask)
        state.newTask.body = ''
      },
      deleteList() {
        boardService.deleteList(props.listProp)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
