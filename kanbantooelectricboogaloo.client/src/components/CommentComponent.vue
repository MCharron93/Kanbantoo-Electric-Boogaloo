<template>
  <div class="comment-component">
    <h5>{{ commentProp.body }}</h5><span>&times;</span>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: {
    commentProp: Object
  },
  setup(props) {
    return {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
