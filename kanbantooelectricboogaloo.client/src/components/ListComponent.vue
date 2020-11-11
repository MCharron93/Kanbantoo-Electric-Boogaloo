<template>
  <div class="list-component">
    <div>
      <h2>{{ listProp.body }}</h2>
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
