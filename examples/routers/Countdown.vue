<template>
  <div>
    <i-group title="auto countdown">
      <i-cell title="15s" v-model="value">
        <i-countdown slot="value" v-model="time1" @on-finish="finish" v-show="show"></i-countdown>
      </i-cell>
    </i-group>
    <i-group title="manually">
      <i-switch title="start" v-model="start"></i-switch>
      <i-cell title="15s">
        <i-countdown slot="value" v-model="time2" :start="start" @on-finish="finish2"></i-countdown>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  methods: {
    finish (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index', index)
    },
    finish2 (index) {
      this.start = false
      this.time = 20
    }
  },
  data () {
    return {
      show: true,
      time1: 15,
      time2: 15,
      value: '',
      start: false
    }
  }
}
</script>