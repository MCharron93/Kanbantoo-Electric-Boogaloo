<template>
  <div class="comments-component">
    <h5>{{ commentProp }}</h5>
  </div>
</template>

<script>
export default {
  name: 'CommentsComponent',
  props: {
    commentProp: Object
  },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
