<template>
  <div>
    <i-group :title="'no placeholder, the current value is : ' + defaultValue">
      <i-selector title="省份" :options="list" v-model="defaultValue"></i-selector>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultValue: '',
      plainList: ['广东', '广西'],
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      list2: [{key: true, value: '是'}, {key: false, value: '否'}],
      value1: '广西',
      value2: 'gd',
      value3: true,
      list1: ['A', 'B', 'C']
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  }
}
</script>
