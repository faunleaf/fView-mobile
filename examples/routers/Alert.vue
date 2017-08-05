<template>
  <div>
    <i-group>
      <i-switch title="Show Me" v-model="show"></i-switch>
    </i-group>
    <div v-transfer-dom>
      <i-alert v-model="show" title="Congratulations" @on-show="onShow" @on-hide="onHide"> Your Message is sent successfully~</i-alert>
    </div>

    <i-group title="Use as a plugin">
      <i-cell title="Show Me" @click.native="showPlugin" is-link></i-cell>
      <i-cell title="will auto close in 3s" @click.native="showPluginAuto" is-link></i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$Alert.show({
        title: 'VUX is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        }
      })
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$Alert.remove()
      }, 3000)
    }
  }
}
</script>
