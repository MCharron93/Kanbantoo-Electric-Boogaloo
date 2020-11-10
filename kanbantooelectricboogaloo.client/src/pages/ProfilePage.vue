<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class="row justify-content-center text-center">
      <board-component />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { boardService } from '../services/BoardService'
import BoardComponent from '../components/BoardComponent'
export default {
  name: 'Profile',
  components: { BoardComponent },
  setup() {
    onMounted(() => boardService.getBoards())
    return {
      profile: computed(() => AppState.profile),
      boards: computed(() => AppState.boards)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
