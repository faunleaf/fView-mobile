<template>
  <div style="text-align:center;margin-top:15px;">
    <i-divider>default type = img</i-divider>
    <i-qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></i-qrcode>
    <br>
    <br>
    <i-divider>type = canvas</i-divider>
    <i-qrcode value="https://vux.li?x-page=demo_qrcode"></i-qrcode>
    <br>
    <i-qrcode :value="value" :fg-color="fgColor"></i-qrcode>
    <br>
    <span>current url: {{value}}</span>
    <br>
    <span>current fgColor: {{fgColor}}</span>
  </div>
</template>

<script>
export default {
  mounted () {
    setInterval(() => {
      this.value = `https://vux.li?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 1000)
  },
  data () {
    return {
      value: 'https://vux.li',
      fgColor: '#000000'
    }
  }
}
</script>