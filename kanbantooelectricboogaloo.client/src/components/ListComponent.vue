<template>
  <div class="list-component">
    <div>
      <h2>{{ listProp.body }}</h2>
      <!-- task component nested -->
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { boardService } from '../services/BoardService'
export default {
  name: 'ListComponent',
  props: {
    listProp: Object
  },
  setup(props) {
    onMounted(async() => {
      await boardService.getTasks(props.listProp._id)
    })
    return {
      profile: computed(() => AppState.profile),
      lists: computed(() => props.listProp)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
