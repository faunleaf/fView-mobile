<template>
  <div class="vux-cell-box weui-cell" :class="{'vux-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link, 'vux-cell-no-border-intent': !borderIntent}" @click="onClick">
    <div><slot></slot></div>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick () {
      this.link && go(this.link, this.$router)
    }
  }
}
</script>
