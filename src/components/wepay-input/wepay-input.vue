<template>
  <div>
    <div class="weui-wepay-pay">
      <div class="weui-wepay-pay__bd">
        <div class="weui-wepay-pay__inner">
            <h1 class="weui-wepay-pay__title" v-html="title"></h1>
            <div class="weui-wepay-pay__inputs"> <strong class="weui-wepay-pay__strong" v-html="label || '￥'"></strong>
                <input type="number" class="weui-wepay-pay__input" :placeholder="placeholder" v-model="currentValue" number></div>
            <div class="weui-wepay-pay__intro">
              <slot name="description"><div v-html="description"></div></slot>
            </div>
        </div>
      </div>
      <div class="weui-wepay-pay__ft">
        <p class="weui-wepay-pay__info" v-html="info"></p>
        <div class="weui-wepay-pay__btn">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'placeholder', 'info', 'label', 'value'],
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
