<template>
  <div>
    <i-group title="default">
      <i-radio :options="radio001" @on-change="change"></i-radio>
    </i-group>

    <i-group title="preselect 'China'">
      <i-radio :options="radio001" value="China"></i-radio>
    </i-group>

    <i-group :title="'fill mode value is '+radio001Value">
      <i-radio fill-mode :options="radio001" v-model="radio001Value" @on-change="change"></i-radio>
    </i-group>

    <i-group title="fill mode with custom placeholder and label">
      <i-radio fill-mode fill-label="Other" fill-placeholder="填写其他的哦" :options="radio001" @on-change="change"></i-radio>
    </i-group>

    <i-group title="object options">
      <i-radio fill-mode fill-label="Other" fill-placeholder="other" :options="radio003" @on-change="change"></i-radio>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio001: [ 'China', 'Japan' ],
      radio001Value: 'China',
      radio002Value: 'Japan',
      radio003: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '002',
        value: 'radio002'
      }]
    }
  },
  methods: {
    change (value) {
      console.log('change:', value)
    }
  }
}
</script>
