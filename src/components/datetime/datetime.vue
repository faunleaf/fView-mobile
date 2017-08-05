<template>
  <a class="vux-datetime weui-cell weui-cell_access" href="javascript:">
    <slot>
      <div>
        <p :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}" v-html="title"></p>
        <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
      </div>
      <div class="weui-cell__ft vux-cell-primary vux-datetime-value" :style="{textAlign: valueTextAlign}">
        {{ _value }}
        <i-icon class="vux-input-icon" type="warn" v-show="!valid" :title="firstError"></i-icon>
      </div>
    </slot>
  </a>
</template>

<script>
import { iIcon } from '../icon'
import iGroup from '../group'
import iInlineDesc from '../inline-desc'
import Picker from './datetimepicker'
import Base from '../../libs/base'

export default {
  mixins: [Base],
  components: { iGroup, iInlineDesc, iIcon },
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    inlineDesc: String,
    placeholder: String,
    minYear: Number,
    maxYear: Number,
    confirmText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    clearText: String,
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    },
    required: {
      type: Boolean,
      default: false
    },
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    startDate: String,
    endDate: String,
    valueTextAlign: String,
    displayFormat: Function
  },
  created () {
    this.currentValue = this.value
    this.handleChangeEvent = true
  },
  data () {
    return {
      currentValue: null,
      valid: true,
      errors: {}
    }
  },
  mounted () {
    const uuid = this.uuid
    this.$nextTick(() => {
      this.$el.setAttribute('id', 'vux-datetime-' + uuid)
      this.render()
    })
  },
  computed: {
    _value () {
      if (!this.currentValue) {
        return this.placeholder || ''
      } else {
        return this.displayFormat ? this.displayFormat(this.currentValue) : this.currentValue
      }
    },
    pickerOptions () {
      const _this = this
      const options = {
        trigger: '#vux-datetime-' + this.uuid,
        format: this.format,
        value: this.currentValue,
        output: '.vux-datetime-value',
        confirmText: this.confirmText,
        cancelText: _this.cancelText,
        clearText: _this.clearText,
        yearRow: this.yearRow,
        monthRow: this.monthRow,
        dayRow: this.dayRow,
        hourRow: this.hourRow,
        minuteRow: this.minuteRow,
        minHour: this.minHour,
        maxHour: this.maxHour,
        startDate: this.startDate,
        endDate: this.endDate,
        onConfirm (value) {
          _this.currentValue = value
        },
        onClear (value) {
          _this.$emit('on-clear', value)
        },
        onHide () {
          _this.validate()
        }
      }
      if (this.minYear) {
        options.minYear = this.minYear
      }
      if (this.maxYear) {
        options.maxYear = this.maxYear
      }
      return options
    },
    firstError () {
      let key = Object.keys(this.errors)[0]
      return this.errors[key]
    }
  },
  methods: {
    render () {
      this.$nextTick(() => {
        this.picker && this.picker.destroy()
        this.picker = new Picker(this.pickerOptions)
      })
    },
    validate () {
      if (!this.currentValue && this.required) {
        this.valid = false
        this.errors.required = '必填'
        return
      }
      this.valid = true
      this.errors = {}
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('on-change', val)
      this.$emit('input', val)
      this.validate()
    },
    startDate () {
      this.render()
    },
    endDate () {
      this.render()
    },
    value (val) {
      if (this.currentValue !== val) {
        this.currentValue = val
        this.render()
      }
    }
  },
  beforeDestroy () {
    this.picker.destroy()
  }
}
</script>
