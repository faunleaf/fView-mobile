<template>
  <div class="vux-toast">
    <div class="weui-mask_transparent" v-show="isShowMask && show"></div>
    <transition :name="currentTransition">
      <div class="weui-toast" :style="{width: width}" :class="toastClass" v-show="show">
        <i class="weui-icon-success-no-circle weui-icon_toast" v-show="type !== 'text'"></i>
        <p class="weui-toast__content" v-if="text" :style="style" v-html="text"></p>
        <p class="weui-toast__content" v-else><slot></slot></p>
      </div>
    </transition>
  </div>
</template>

<script>
import SafariFixIssue from '../../mixins/safari-fix'

export default {
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  },
  computed: {
    currentTransition () {
      if (this.transition) {
        return this.transition
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top'
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom'
      }
      return 'vux-fade'
    },
    toastClass () {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      }
    },
    style () {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' }
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          this.$emit('on-hide')
          this.fixSafariOverflowScrolling('touch')
        }, this.time)
      }
    },
    value (val) {
      this.show = val
    }
  }
}
</script>
