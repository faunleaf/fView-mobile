<template>
  <div>
    <p style="padding:15px;">
      <span>Normal Usage</span>
      <i-clocker :time="time1"></i-clocker>
    </p>

    <i-group title="Use in cell">
      <i-cell title="Date:0801">
        <i-clocker time="2017-08-01" slot="value"></i-clocker>
      </i-cell>
    </i-group>

    <i-group title="custom template">
      <i-cell title="Date:0801">
        <i-clocker time="2017-08-01" slot="value">
          <span style="color:red">%D 天</span>
          <span style="color:green">%H 小时</span>
          <span style="color:blue">%M 分 %S 秒</span>
        </i-clocker>
      </i-cell>
    </i-group>

  </div>
</template>

<script>
export default {
  ready () {
    setTimeout(() => {
      this.time1 = '2017-08-13 22:54'
    }, 5000)
  },
  data () {
    return {
      time1: '2017-07-13 21:54'
    }
  }
}
</script>

<style scoped>
.day {
  background-color:#000;
  color:#fff;
  text-align:center;
  display:inline-block;
  padding:0 3px;
  border-radius:3px;
}
</style>
