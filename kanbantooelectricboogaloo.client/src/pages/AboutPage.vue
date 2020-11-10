<template>
  <div class="about">
    <h1>This is the about page</h1>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'AboutPage',
  setup() {
    const state = reactive({
      query: ''
    })
    // onMounted can be used with an async await to load items before rendering/accessing properties off of them
    // Components will load before the api can respond, since the page has to completely rebuild itself, important
    // to know what data is trying to be rendered and what data is needed for that with/without user, boards, tasks, etc.
    return {
      state
    }
  }
  // think about where and when to leave pages and data that may be required before leaving/important to the page

  // beforeRouteLeave(to, from, next){
  // if(state.query.length > 0){
  // const leave = window.confirm("you have unsave data, are you sure you want to leave this page?")
  // }
  // if(leave){
  // next()
  // }else{
  //   next(false)
  // }
  // }else{
  // next()
  // }
  // }
}
</script>
