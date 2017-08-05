<template>
  <div>
    <i-group>
      <i-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" placeholder="请选择地址" inline-desc="可以设置placeholder"></i-address>
      <i-cell title="上面value值" :value="value"></i-cell>
    </i-group>
    <br>
    <i-group label-width="4em" label-align="left">
      <i-address :title="title2" v-model="value2" raw-value :list="addressData" value-text-align="left"></i-address>
    </i-group>
    <br/>
    <div style="padding: 0 15px;">
      <i-button type="primary" @click.native="changeData">改变数据</i-button>
      <i-button type="primary" @click.native="changeDataByLabels">改变数据（通过文字值）</i-button>
      <i-button type="primary" @click.native="changeDataByLabels2">改变数据（两级，通过文字值）</i-button>
    </div>
    <br/>

    <i-group>
      <i-address title="二级省市" v-model="value3" raw-value :list="addressData"></i-address>
    </i-group>

    <br/>
    <i-group title="错误的地址将不能正确渲染到相应位置">
      <i-address title="错误的值" v-model="value5" raw-value :list="addressData" inline-desc="广东省, 深圳 市, 南山区"></i-address>
    </i-group>
  </div>
</template>

<script>
import ChinaAddressV3Data from '../data/china_address_v3.json'

export default {
  data () {
    return {
      title: '默认为空',
      value: [],
      title2: '设置值',
      value2: ['天津市', '市辖区', '和平区'],
      value3: ['广东省', '中山市', '--'],
      addressData: ChinaAddressV3Data,
      value4: [],
      value5: ['广东省', '深圳 市', '南山区']
    }
  },
  methods: {
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  }
}
</script>
