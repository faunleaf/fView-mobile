<template>
  <div>
    <i-group title="default format: YYYY-MM-DD">
      <i-datetime v-model="value1" @on-change="change" title="Birthday"></i-datetime>
    </i-group>

     <i-group title="format display value">
      <i-datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" title="Birthday"></i-datetime>
    </i-group>

    <p class="center" @click="formatValue = '2017-11-11'">click to change value to: 2017-11-11</p>

     <i-group title="custom trigger slot">
      <i-datetime v-model="value7" @on-change="change" title="Birthday" clear-text="today" @on-clear="setToday">
        <i-button>Click me</i-button>
      </i-datetime>
    </i-group>
    <i-group title="required">
      <i-datetime v-model="value8" title="Required" clear-text="clear" @on-clear="clearValue8" :required="true"></i-datetime>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '2015-11-12',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '2016-08-18',
      value7: '',
      value8: '',
      limitHourValue: '',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      }
    }
  },
  methods: {
    reRender () {
      this.startDate = '2016-11-11'
      this.endDate = '2018-10-11'
    },
    change (value) {
      console.log('change', value)
    },
    clearValue (value) {
      this.$data.value6 = ''
    },
    clearValue8 (value) {
      this.$data.value8 = ''
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.$data.value7 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    }
  }
}
</script>

<style scoped lang="less">
.center {
  padding-top: 10px;
  padding-left: 15px;
  color: green;
}
</style>
