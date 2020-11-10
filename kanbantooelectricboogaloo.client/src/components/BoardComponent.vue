<template>
  <div class="board-component col-2 pt-3 card radius20 shadow text-center pb-2">
    <h5 class="d-flex justify-content-between">
      {{ boardProp.title }}
      <i class="fas fa-ellipsis-h"></i>
    </h5>
  </div>
</template>

<script>
export default {
  name: 'BoardComponent',
  props: ['boardProp'],
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
