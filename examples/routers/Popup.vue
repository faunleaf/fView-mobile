<template>
  <div>
    <i-group>
      <i-switch title="transparent background" v-model="show7"></i-switch>
    </i-group>
    
    <div v-transfer-dom>
      <i-popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <i-group>
          <i-cell title="Product" value="Donate"></i-cell>
          <i-cell title="Total" value="$10.24"></i-cell>
         </i-group>
         <div style="padding:20px 15px;">
          <i-button type="primary">Pay</i-button>
          <i-button @click.native="show7 = false">Cancel</i-button>
         </div>
        </div>
      </i-popup>
    </div>

    <i-group title="set position">
      <i-switch title="left(100% width)" v-model="show8"></i-switch>
      <i-switch title="right" v-model="show9"></i-switch>
      <i-switch title="top(no mask)" v-model="show10"></i-switch>
      <i-switch title="bottom" v-model="show11"></i-switch>
    </i-group>

    <div v-transfer-dom>
      <i-popup v-model="show8" position="left" width="100%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
        </div>
      </i-popup>
    </div>
    
    <div v-transfer-dom>
      <i-popup v-model="show9" position="right">
        <div style="width:200px;">
        </div>
      </i-popup>
    </div>

    <div v-transfer-dom>
      <i-popup v-model="show10" position="top" :show-mask="false">
        <div class="position-vertical-demo">
        I'm on top. Hide in 1s.
        </div>
      </i-popup>
    </div>

    <div v-transfer-dom>
      <i-popup v-model="show11" position="bottom">
        <div class="position-vertical-demo">
        I'm on bottom.
        </div>
      </i-popup>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      title6: '默认空的',
      value6: [],
      show7: false,
      showToast: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false
    }
  },
  methods: {
    resetScroller () {
      this.$nextTick(() => {
        this.$refs.scroller.reset()
      })
    },
    log (str) {
      console.log(str)
    }
  },
  watch: {
    show10 (val) {
      if (val) {
        setTimeout(() => {
          this.show10 = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/close.less';

.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.popup2 {
  padding-bottom:15px;
  height:400px;
}
.position-vertical-demo {
  background-color: #ffe26d;
  color: #000;
  text-align: center;
  padding: 15px;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
</style>
