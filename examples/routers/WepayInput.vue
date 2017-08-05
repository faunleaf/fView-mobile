<template>
  <div>
    <i-wepay-input title="支付金额" description="最多可输入金额500元" info="支付金额给商户" v-model="money">
      <i-button type="primary" slot="button">立即支付 {{money}}</i-button>
    </i-wepay-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      money: ''
    }
  }
}
</script>