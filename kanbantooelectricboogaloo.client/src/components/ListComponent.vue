<template>
  <div class="list-component col-2 pt-3 card radius20 shadow pb-2">
    <div>
      <h2 class="d-flex justify-content-between">
        {{ listProp.body }}
        <i class="fas fa-ellipsis-h"></i>
      </h2>
      <!-- task component nested -->
      <task-component v-for="t in tasks" :key="t" :task-prop="t" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { boardService } from '../services/BoardService'
import { TaskComponent } from '../components/TaskComponent'
export default {
  name: 'ListComponent',
  props: {
    listProp: Object
  },
  components: { TaskComponent },
  setup(props) {
    onMounted(async() => {
      await boardService.getTasks(props.listProp._id)
    })
    return {
      profile: computed(() => AppState.profile),
      lists: computed(() => props.listProp),
      tasks: computed(() => AppState.tasks[props.listProp._id])
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
