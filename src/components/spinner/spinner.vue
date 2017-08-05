<template>
  <span class="vux-spinner" :class="className"></span>
</template>

<script>
import Spinner from './spinner.js'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']

export default {
  mounted () {
    this.$nextTick(() => {
      Spinner(this.$el, this.type)
    })
  },
  props: {
    type: {
      type: String,
      default: 'ios'
    }
  },
  computed: {
    className () {
      let rs = {}
      for (let i = 0; i < types.length; i++) {
        rs[`vux-spinner-${types[i]}`] = this.type === types[i]
      }
      return rs
    }
  }
}
</script>
