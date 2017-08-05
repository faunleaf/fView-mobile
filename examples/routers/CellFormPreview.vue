<template>
  <div>
    <i-group>
      <i-cell title="Total" value="￥1024"></i-cell>
      <i-cell-form-preview :list="list"></i-cell-form-preview>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        label: 'Apple',
        value: '3.29'
      }, {
        label: 'Banana',
        value: '1.04'
      }, {
        label: 'Fish',
        value: '8.00'
      }]
    }
  }
}
</script>
