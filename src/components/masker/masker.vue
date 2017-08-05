<template>
  <div class="vux-masker-box">
    <slot></slot>
    <div class="vux-masker" :class="{'vux-masker-fullscreen': fullscreen}" :style="style">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { toRGB } from './converter'

export default {
  props: {
    color: {
      type: String,
      default: '0, 0, 0'
    },
    opacity: {
      type: Number,
      default: 0.5
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      let color = /,/.test(this.color) ? this.color : toRGB(this.color.replace('#', '')).join(',')
      return {
        backgroundColor: `rgba(${color},${this.opacity})`
      }
    }
  }
}
</script>
