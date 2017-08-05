<template>
  <div class="vux-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
  mixins: [parentMixin],
  props: {
    height: Number
  }
}
</script>
