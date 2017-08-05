<template>
  <div class="weui-cells_radio">
    <label class="weui-cell weui-cell_radio weui-check__label" :for="`radio_${uuid}_${index}`" v-for="(one, index) in options">
      <div class="weui-cell__bd">
        <p>
          <img class="vux-radio-icon" :src="one.icon" v-show="one && one.icon">
          <span class="vux-radio-label">{{one | getValue}}</span>
        </p>
      </div>
      <div class="weui-cell__ft">
        <input type="radio" class="weui-check" v-model="currentValue" :id="`radio_${uuid}_${index}`" :value="getKey(one)">
        <span class="weui-icon-checked"></span>
      </div>
    </label>
    <div class="weui-cell" v-show="fillMode">
      <div class="weui-cell__hd"><label for="" class="weui-label">{{fillLabel}}</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
      </div>
      <div class="weui-cell__ft" v-show="value==='' && !isFocus">
        <i class="weui-icon-warn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import { getValue, getKey } from '../checklist/object-filter'
import props from './props'

export default {
  mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: props(),
  mounted () {
    this.handleChangeEvent = true
  },
  methods: {
    getKey,
    onFocus () {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal)
      this.$emit('input', newVal)
    },
    fillValue (newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data () {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}

function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>
