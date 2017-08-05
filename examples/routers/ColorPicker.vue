<template>
  <div>
    <div style="padding: 15px;">
      <i-color-picker :colors="colors1" v-model="color1"></i-color-picker>
      <br>
      <i-color-picker :colors="colors1" v-model="color1" size="middle"></i-color-picker>
    </div>
    <i-group title="as a cell's content">
      <i-cell :title="'Color:' + color1">
        <i-color-picker slot="value" :colors="colors1" v-model="color1" size="small"></i-color-picker>
      </i-cell>
    </i-group>
    <i-group title="a cell without title">
      <i-cell primary="content">
        <i-color-picker slot="value" :colors="colors1" v-model="color1" size="middle"></i-color-picker>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: '#FFEF7D',
      colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff']
    }
  }
}
</script>
