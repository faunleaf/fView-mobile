<template>
  <div>
    <i-group title="Default">
      <i-number name="Quantity" title="Quantity"></i-number>
    </i-group>

    <i-group title="listen">
      <i-number title="Quantity" :value="0" :min="0" @on-change="change"></i-number>
    </i-group>

    <i-group title="set width=100px">
      <i-number title="Quantity" width="100px"></i-number>
    </i-group>

    <i-group title="round style">
      <i-number title="Quantity" v-model="roundValue" button-style="round" :min="0" :max="5"></i-number>
    </i-group>

    <i-group title="set step=0.5">
      <i-number title="Quantity" :step="0.5"></i-number>
    </i-group>

    <i-group title="set value=1, min=-5 and max=8">
      <i-number title="Quantity" :min="-5" :max="8" :value="1"></i-number>
    </i-group>

    <i-group title="fillable = true">
      <i-number :value="10" title="Quantity" fillable></i-number>
    </i-group>
    
    <i-group title="use with other group elements">
      <i-number title="Quantity" :min="-5" :max="8" :value="1" type="inline"></i-number>
      <i-number title="Quantity" :min="-5" :max="8" :value="1" type="inline"></i-number>
      <i-switch title="Switch Component" :value.sync="true"></i-switch>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      roundValue: 0
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    }
  }
}
</script>
