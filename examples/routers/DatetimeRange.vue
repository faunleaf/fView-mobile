<template>
  <div>
    <i-group :title="value + ''">
      <i-datetime-range title="Choose" start-date="2017-01-01" end-date="2017-02-02" format="YYYY/MM/DD" v-model="value" @on-change="onChange"></i-datetime-range>
    </i-group>
  </div>
</template>

<script>
export default {
  methods: {
    onChange (val) {
      console.log('change', val)
    }
  },
  data () {
    return {
      value: ['2017-01-15', '03', '05']
    }
  }
}
</script>