<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="hover-nav" @click="toProfile()">
      <h1 class="display-4 text-light">
        <span class="mx-2 text-white">Welcome!</span>
      </h1>
      <p class="text-light">
        Click to continue to your boards!
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    onMounted(() => {
      AppState.navColor = '#7cb8ff'
    })
    return {
      toProfile() {
        router.push('Profile')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  background: linear-gradient(rgba(124,184,255,1) ,rgba(252,169,205,1));

}
.hover-nav:hover{
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
h1{
  transition: all ease 0.2s;
}
</style>
