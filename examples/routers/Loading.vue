<template>
  <div>
    <i-group>
      <i-switch title="Toggle" v-model="show1" @on-change="show1change"></i-switch>
    </i-group>
    <div v-transfer-dom>
      <i-loading v-model="show1" :text="text1"></i-loading>
    </div>
    <div style="padding: 15px;">
      <i-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</i-button>
    </div>
  </div>
</template>

<i18n>
</i18n>

<script>
export default {
  data () {
    return {
      show1: false,
      text1: 'Processing'
    }
  },
  methods: {
    showLoading () {
      this.$Loading.show({
        text: 'Loading'
      })
      setTimeout(() => {
        this.$Loading.remove()
      }, 2000)
    },
    show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>
