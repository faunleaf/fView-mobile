<template>
  <div class="weui-cell" :class="{'vux-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link, 'vux-cell-no-border-intent': !borderIntent}" @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="vux-cell-bd" :class="{'vux-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="vux-label" :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-if="title">{{title}}</label>
        <slot name="after-title"></slot>
      </p>
      <i-inline-desc><slot name="inline-desc">{{inlineDesc}}</slot></i-inline-desc>
    </div>
    <div class="weui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{value}}</slot>
      <i class="weui-loading" v-if="isLoading"></i>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
import iInlineDesc from '../inline-desc'
import { go } from '../../libs/router'
import props from './props'

export default {
  components: {
    iInlineDesc
  },
  props: props(),
  computed: {
    valueClass () {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('on-click');
      go(this.link, this.$router)
    }
  }
}
</script>
