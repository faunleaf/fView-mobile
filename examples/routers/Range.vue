<template>
  <div>
    <i-group title="default range">
      <i-cell title="Default" :inline-desc="'value: '+data1" primary="content">
        <i-range v-model="data1"></i-range>
      </i-cell>
      <i-cell title="allow decimals" :inline-desc="'value is: '+data2" primary="content">
        <i-range v-model="data2" decimal></i-range>
      </i-cell>
      <i-cell title="value=20" :inline-desc="'value is: '+data3" primary="content">
        <i-range v-model="data3"></i-range>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.showData13 = true
    }, 2000)
  },
  data () {
    return {
      data1: 0,
      data2: 0,
      data3: 20,
      data4: 18,
      data5: 28,
      data6: 37,
      data7: 17,
      data8: 25,
      data9: 50,
      data10: 14,
      data11: 30,
      data12: 0,
      data13: 10,
      showData13: false,
      min: 0,
      max: 100,
      dynamiValue: 0
    }
  },
  methods: {
    update () {
      this.min = Math.floor(Math.random() * 30)
      this.max = Math.floor(50 + Math.random() * 100)
    }
  }
}
</script>
