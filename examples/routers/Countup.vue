<template>
  <div style="text-align:center;">
    <i-countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></i-countup>
    <br/>
    <i-countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></i-countup>
    <br>
    <i-countup :end-val="1024" :duration="4" :start="doStart" class="demo1"></i-countup>
    <div style="padding:0 15px;">
      <i-button @click.native="doStart=true" type="primary">Start</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doStart: false
    }
  }
}
</script>

<style scoped>
.demo1 {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 6em;
  color: #04BE02;
}
</style>
