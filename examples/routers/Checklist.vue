<template>
  <div>
    <i-checklist title="Basic Usage" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></i-checklist>
    <div style="padding:15px;">
      <i-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary">切换 label 位置</i-button>
      <i-button @click.native="selectFirst" type="primary">选择第1个值</i-button>
      <i-button @click.native="selectFirstTwo" type="primary">选择前两个值</i-button>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D']
    }, 3000)
  },
  methods: {
    change (val) {
      console.log('change', val)
    },
    onError (errors) {
      console.log(errors)
      this.error = errors
    },
    onNoError () {
      this.error = null
    },
    selectFirst () {
      this.checklist001 = ['China']
    },
    selectFirstTwo () {
      this.checklist001 = ['China', 'Japan']
    }
  },
  data () {
    return {
      labelPosition: '',
      error: '',
      commonList: [ 'China', 'Japan', 'America' ],
      checklist001: [],
      checklist0011: [],
      checklist002: [ 'China', 'Japan' ],
      checklist003: [ 'China', 'Japan' ],
      checklist005: [ '01', '02', '03' ],
      checklist005Value: [],
      objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
      objectListValue: ['1', '2'],
      asyncList: [],
      asyncListValue: []
    }
  }
}
</script>

<style scoped>
.error {
  padding-left: 15px;
  line-height: 28px;
  color: #888;
  font-size: 12px;
}
</style>
