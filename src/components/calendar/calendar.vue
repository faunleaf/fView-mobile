<template>
  <div>
    <i-cell :title="title" primary="content" :value="currentValue" @click.native="onClick" is-link></i-cell>
    <i-popup v-model="show">
      <i-inline-calendar
      v-model="currentValue"
      @on-change="onSelect"
      :render-month="renderMonth"
      :start-date="startDate"
      :end-date="endDate"
      :show-last-month="showLastMonth"
      :show-next-month="showNextMonth"
      :highlight-weekend="highlightWeekend"
      :return-six-rows="returnSixRows"
      :hide-header="hideHeader"
      :hide-week-list="hideWeekList"
      :replace-text-list="replaceTextList"
      :weeks-list="weeksList"
      :render-function="renderFunction"
      :render-on-value-change="renderOnValueChange"
      :disable-past="disablePast"
      :disable-future="disableFuture"
      ></i-inline-calendar>
    </i-popup>
  </div>
</template>

<script>
import iInlineCalendar from '../inline-calendar'
import iPopup from '../popup'
import iCell from '../cell'
import props from '../inline-calendar/props'

const Props = props()
Props.title = {
  type: String,
  required: true
}

export default {
  components: { iInlineCalendar, iPopup, iCell },
  created () {
    this.currentValue = this.value
  },
  props: Props,
  methods: {
    onClick () {
      this.show = true
    },
    onSelect (val) {
      this.show = false
      this.currentValue = val
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  },
  data () {
    return {
      show: false,
      currentValue: ''
    }
  }
}
</script>