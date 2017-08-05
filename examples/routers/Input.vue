<template>
  <div>
    <i-group title="set keyboard=number and is-type=china-mobile">
      <i-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></i-input>
    </i-group>

    <i-group title="set is-type=email">
      <i-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></i-input>
    </i-group>

    <i-group title="set min=2 and max=5">
      <i-input title="2-5个字符" placeholder="" :min="2" :max="5"></i-input>
    </i-group>

    <i-group title="确认输入">
      <i-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6" @on-change="change"></i-input>
      <i-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></i-input>
    </i-group>

    <i-group title="验证码" class="weui-cells_form">
      <i-input title="验证码" class="weui-cell_vcode">
        <img slot="right" class="weui-vcode-img" src="http://weui.github.io/weui/images/vcode.jpg">
      </i-input>
      <i-input title="发送验证码" class="weui-vcode">
        <i-button slot="right" type="primary" mini>发送验证码</i-button>
      </i-input>
    </i-group>

    <i-group title="check if value is valid when required===true">
      <i-input title="message" placeholder="I'm placeholder" ref="input01" required></i-input>
      <i-cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></i-cell>
    </i-group>

     <i-group title="check if value is valid when required===false">
      <i-input title="message" placeholder="I'm placeholder" :required="false" ref="input02" @click.native="getValid2"></i-input>
      <i-cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></i-cell>
    </i-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '123465',
      password2: '',
      valid1: false,
      valid2: false,
      iconType: '',
      be2333: function (value) {
        return {
          valid: value === '2333',
          msg: 'Must be 2333'
        }
      },
      style: '',
      disabledValue: 'hello',
      debounceValue: '',
      maxValue: ''
    }
  },
  methods: {
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change (val) {
      console.log(val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus (val) {
      console.log('on focus', val)
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
