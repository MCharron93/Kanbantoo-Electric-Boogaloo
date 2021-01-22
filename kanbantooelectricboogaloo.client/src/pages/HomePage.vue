<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"> -->
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center" @click="toProfile()">
      <span class="mx-2 text-white">Welcome</span>
    </h1>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
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
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
