<template>
  <div style="padding: 15px 0;">
    <i-divider>radio: object value</i-divider>
    <div class="box">
      <i-checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <i-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</i-checker-item>
      </i-checker>
      <br>
      <span>current value is: {{demo11}}</span>
      <br>
      <br>
      <i-checker v-model="demo12" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <i-checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</i-checker-item>
      </i-checker>
      <br>
      <span>current value is: {{demo12}}</span>
      <br>
    </div>
    
    <i-divider>custom styles</i-divider>
    <div class="box">
       <i-checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
        <i-checker-item value="one">
          <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
        </i-checker-item>
        <i-checker-item value="two">
          <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
        </i-checker-item>
        <i-checker-item value="three">
          <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
        </i-checker-item>
      </i-checker>
      <br>
      <span>current value is: {{demo3}}</span>
      <br>
    </div>
   
    <i-divider>used in a popup</i-divider>
    <i-group>
      <i-cell title="select color" :value="demo4" is-link @click.native="showPopup=true"></i-cell>
    </i-group>
    <i-popup v-model="showPopup" class="checker-popup">
      <div style="padding:10px 10px 40px 10px;">
        <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
        <i-checker
        v-model="demo4"
        default-item-class="demo4-item"
        selected-item-class="demo4-item-selected"
        disabled-item-class="demo4-item-disabled">
          <i-checker-item value="花跟叶" @on-item-click="onItemClick">花跟叶</i-checker-item>
          <i-checker-item value="鸟与树" @on-item-click="onItemClick">鸟与树</i-checker-item>
          <i-checker-item value="我和你" @on-item-click="onItemClick">我和你</i-checker-item>
          <i-checker-item value="全套礼品装" disabled @on-item-click="onItemClick">全套礼品装</i-checker-item>
        </i-checker>
      </div>
    </i-popup>

    <i-divider>A real world radio example {{demo5}}</i-divider>
    <i-checker
    v-model="demo5"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected"
    >
      <i-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</i-checker-item>
    </i-checker>
    <br/>
    <i-divider>A real world checkbox example {{demo6}}</i-divider>
    <i-checker
    v-model="demo6"
    type="checkbox"
    default-item-class="demo5-item"
    selected-item-class="demo5-item-selected"
    >
      <i-checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{['good','nice','awesome'][i - 1]}}</i-checker-item>
    </i-checker>
  </div>
</template>

<script>
export default {
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
  data () {
    return {
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }],
      demo1: '',
      demo11: null,
      demo12: {key: '2', value: 'B'},
      demo21: null,
      demo22: [{key: '2', value: 'B'}],
      demo23: null,
      demo1Checkbox: [2, 1],
      demo1CheckboxMax: ['2', '3'],
      demo2: '2',
      demo3: '',
      demo4: '花跟叶',
      showPopup: false,
      demo5: 1,
      demo6: [2, 3]
    }
  }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
