<template>
  <div :style="{height: height + 'px',position: 'relative', overflow: 'hidden'}">
    <slot></slot>
  </div>
</template>

<script>
import Blur from './blur'

export default {
  mounted () {
    this.$nextTick(() => {
      this._blur = new Blur(this.$el, {
        url: this.url,
        blurAmount: this.blurAmount,
        imageClass: 'vux-bg-blur',
        duration: 100, // If the image needs to be faded in, how long that should take
        opacity: 1 // Specify the final opacity that the image will have
      })
    })
  },
  props: {
    blurAmount: {
      type: Number,
      default: 10
    },
    url: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 200
    }
  },
  watch: {
    blurAmount (blurAmount) {
      this._blur.setBlurAmount(blurAmount)
      this._blur.generateBlurredImage(this.url)
    },
    url (url) {
      this._blur.generateBlurredImage(url)
    }
  }
}
</script>
