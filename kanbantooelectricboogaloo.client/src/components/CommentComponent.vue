<template>
  <div class="comment-component">
    <div class="col-12 d-flex justify-content-between">
      <h5>
        {{ commentProp.body }}
      </h5>
      <span class="deleteX" @click="deleteComment">&times;</span>
    </div>
  </div>
</template>

<script>
import { boardService } from '../services/BoardService'
export default {
  name: 'CommentComponent',
  props: {
    commentProp: Object
  },
  setup(props) {
    return {
      deleteComment() {
        boardService.deleteComment(props.commentProp)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.deleteX{
  color: red;
}

</style>
