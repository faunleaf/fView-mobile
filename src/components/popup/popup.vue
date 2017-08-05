<template>
  <transition :name="`vux-popup-animate-${position}`">
    <div v-show="show" :style="styles" class="vux-popup" :class="`vux-popup-${position}`">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popup from './popup.js'

export default {
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  mounted () {
    this.$nextTick(() => {
      const _this = this
      this.popup = new Popup({
        showMask: _this.showMask,
        container: _this.$el,
        innerHTML: '',
        hideOnBlur: _this.hideOnBlur,
        onOpen () {
          _this.fixSafariOverflowScrolling('auto')
          _this.show = true
        },
        onClose () {
          _this.show = false
          if (Object.keys(window.__$vuxPopups).length > 1) return
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch')
          }, 300)
        }
      })
      this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling')
    })
  },
  methods: {
    /**
    * https://github.com/airyland/vux/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling (type) {
      if (!this.$overflowScrollingList.length) return
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
      }
    }
  },
  data () {
    return {
      hasFirstShow: false,
      show: this.value
    }
  },
  computed: {
    styles () {
      const styles = {}
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height
      } else {
        styles.width = this.width
      }

      this.isTransparent && (styles['background'] = 'transparent')
      return styles
    }
  },
  watch: {
    show (val) {
      this.$emit('input', val)
      if (val) {
        this.popup.show()
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')
        if (!this.hasFirstShow) {
          this.$emit('on-first-show')
          this.hasFirstShow = true
        }
      } else {
        this.$emit('on-hide')
        this.show = false
        this.popup.hide(false)
        setTimeout(() => {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            this.fixSafariOverflowScrolling('touch')
          }
        }, 200)
      }
    },
    value (val) {
      this.show = val
    }
  },
  beforeDestroy () {
    this.popup.destroy()
    this.fixSafariOverflowScrolling('touch')
  }
}
</script>
