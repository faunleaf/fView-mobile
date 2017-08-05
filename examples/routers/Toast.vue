<template>
  <div>
    <div style="padding:15px;">
      <i-button @click.native="showPosition('top')" type="primary">Top</i-button>
      <i-button @click.native="showPosition('middle')" type="primary">Middle</i-button>
      <i-button @click.native="showPosition('bottom')" type="primary">Bottom</i-button>
      <i-button @click.native="showPosition('')" type="primary">Default</i-button>  
    </div>

    <i-toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">Basic Usage</i-toast>

    <i-group title="As a plugin(>=v0.1.3)">
      <i-switch title="default" v-model="show9" @on-change="onChange"></i-switch>
    </i-group>
  </div>
</template>

<script>
export default {
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    },
    onHide () {
      console.log('on hide')
    },
    onChange (val) {
      const _this = this
      if (val) {
        this.$Toast.show({
          text: 'Hello World',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
            _this.show9 = false
          }
        })
      } else {
        this.$Toast.remove()
      }
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      position: 'default',
      showPositionValue: false
    }
  }
}
</script>
