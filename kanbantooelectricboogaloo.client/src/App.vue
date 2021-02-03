<template>
  <header>
    <Navbar :style="'background-color:'+NavColor+''" />
  </header>
  <main>
    <router-view v-slot="{Component}">
      <!-- <transition name="route" mode="out-in"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      NavColor: computed(() => AppState.navColor)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
