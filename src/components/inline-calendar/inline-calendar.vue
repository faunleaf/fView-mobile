<template>
  <div class="inline-calendar" :class="{'is-weekend-highlight': highlightWeekend}">
    <div class="calendar-header" v-show="!hideHeader">
      <div class="calendar-year">
        <span @click="go(year - 1, month)">
          <a class="year-prev vux-prev-icon" href="javascript:"></a>
        </span>
        <a class="calendar-year-txt calendar-title" href="javascript:">{{year}}</a>
        <span class="calendar-header-right-arrow" @click="go(year + 1, month)">
          <a class="year-next vux-next-icon" href="javascript:"></a>
        </span>
      </div>

      <div class="calendar-month">
        <span @click="prev">
          <a class="month-prev vux-prev-icon" href="javascript:"></a>
        </span>
        <a class="calendar-month-txt calendar-title" href="javascript:">{{months[month]}}</a>
        <span @click="next" class="calendar-header-right-arrow">
          <a class="month-next vux-next-icon" href="javascript:"></a>
        </span>
      </div>
    </div>

    <table>
      <thead v-show="!hideWeekList">
        <tr>
          <th v-for="(week, index) in _weeksList" class="week" :class="`is-week-list-${index}`">{{week}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(day,k1) in days">
          <td
          v-for="(child,k2) in day"
          :data-date="formatDate(year, month, child)"
          :data-current="currentValue"
          :class="buildClass(k2, child, formatDate(year, month, child) === currentValue && !child.isLastMonth && !child.isNextMonth)"
          @click="select(k1,k2,child)">
            <span
            v-show="(!child.isLastMonth && !child.isNextMonth ) || (child.isLastMonth && showLastMonth) || (child.isNextMonth && showNextMonth)">{{replaceText(child.day, formatDate(year, month, child))}}</span>
            <div v-html="renderFunction(k1, k2, child)"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import format from '../datetime/format'
import { getDays, zero } from './util'
import props from './props'

export default {
  props: props(),
  data () {
    return {
      year: 0,
      month: 0,
      days: [],
      today: format(new Date(), 'YYYY-MM-DD'),
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      currentValue: ''
    }
  },
  created () {
    this.currentValue = this.value
  },
  mounted () {
    this.currentValue = this.convertDate(this.currentValue)
    this.render(this.renderMonth[0], this.renderMonth[1] - 1)
  },
  computed: {
    _weeksList () {
      if (!this.weeksList || !this.weeksList.length) {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      } else {
        return this.weeksList
      }
    },
    _replaceTextList () {
      const rs = {}
      for (let i in this.replaceTextList) {
        rs[this.convertDate(i)] = this.replaceTextList[i]
      }
      return rs
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.currentValue = this.convertDate(val)
      if (this.renderOnValueChange) {
        this.render(null, null, val)
      } else {
        this.render(this.year, this.month, this.currentValue)
      }
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    renderFunction () {
      this.render(this.year, this.month, this.currentValue)
    },
    returnSixRows (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    startDate (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    endDate (val) {
      this.render(this.year, this.month, this.currentValue)
    },
    disablePast () {
      this.render(this.year, this.month, this.currentValue)
    },
    disableFuture () {
      this.render(this.year, this.month, this.currentValue)
    }
  },
  methods: {
    replaceText (day, formatDay) {
      return this._replaceTextList[formatDay] || day
    },
    convertDate (date) {
      return date === 'TODAY' ? this.today : date
    },
    buildClass (index, child, isCurrent) {
      const className = {
        current: child.current || isCurrent,
        'is-disabled': child.disabled,
        'is-today': child.isToday
      }
      className[`is-week-${index}`] = true
      return className
    },
    render (year, month) {
      let data = getDays({
        year: year,
        month: month,
        value: this.currentValue,
        rangeBegin: this.convertDate(this.startDate),
        rangeEnd: this.convertDate(this.endDate),
        returnSixRows: this.returnSixRows,
        disablePast: this.disablePast,
        disableFuture: this.disableFuture
      })
      this.days = data.days
      this.year = data.year
      this.month = data.month
    },
    formatDate: (year, month, child) => {
      return [year, zero(child.month + 1), zero(child.day)].join('-')
    },
    prev () {
      if (this.month === 0) {
        this.month = 11
        this.year = this.year - 1
      } else {
        this.month = this.month - 1
      }
      this.render(this.year, this.month)
    },
    next () {
      if (this.month === 11) {
        this.month = 0
        this.year = this.year + 1
      } else {
        this.month = this.month + 1
      }
      this.render(this.year, this.month)
    },
    go (year, month) {
      this.render(year, month)
    },
    select (k1, k2, data) {
      if (!data.isBetween) {
        return
      }
      if (!data.isLastMonth && !data.isNextMonth) {
        this.days[k1][k2].current = true
        this.currentValue = [this.year, zero(this.month + 1), zero(this.days[k1][k2].day)].join('-')
      } else {
        this.currentValue = [data.year, zero(data.month + 1), zero(data.day)].join('-')
      }
    }
  }
}
</script>
