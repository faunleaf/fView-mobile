<template>
<div>
  <i-inline-calendar
  class="inline-calendar-demo"
  :show.sync="show"
  v-model="value"
  start-date="2016-04-01"
  end-date="2018-05-30"
  :range="range"
  :show-last-month="showLastMonth"
  :show-next-month="showNextMonth"
  :highlight-weekend="highlightWeekend"
  :return-six-rows="return6Rows"
  :hide-header="hideHeader"
  :hide-week-list="hideWeekList"
  :replace-text-list="replaceTextList"
  :weeks-list="weeksList"
  :render-function="buildSlotFn"
  :disable-past="disablePast"
  :disable-future="disableFuture">
  </i-inline-calendar>

  <i-group>
    <i-cell title="current value" :value="value"></i-cell>
    <i-cell title="start date" value="2016-04-01"></i-cell>
    <i-cell title="end date" value="2018-05-30"></i-cell>
  </i-group>

  <br>

  <i-divider>We can render a list of calendars order by month</i-divider>
  <i-group>
    <i-cell title="current value" :value="listValue"></i-cell>
  </i-group>
  <br>
  <div v-for="i in 5" v-if="i >= 1">
    <i-divider>2016 / {{i}}</i-divider>
    <i-inline-calendar
    :render-month="[2016, i]"
    hide-header
    :return-six-rows="false"
    v-model="listValue"
    :show-last-month="false"
    :show-next-month="false"
    :render-on-value-change="false"></i-inline-calendar>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false
    }
  },
  watch: {
    replace (val) {
      this.replaceTextList = val ? {
        'TODAY': '今'
      } : {}
    },
    useCustomFn (val) {
      this.buildSlotFn = val ? (line, index, data) => {
        return /8/.test(data.day) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : ''
      } : () => ''
    },
    changeWeeksList (val) {
      this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  }
}
</script>

<style lang="less" scoped>
.inline-calendar-demo {
  background: rgba(255,255,255,0.9);
}
</style>
