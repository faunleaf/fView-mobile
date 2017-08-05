<template>
  <div>
    <i-msg title="Yeah! You make it" description="msg description" :buttons="buttons" :icon="icon"></i-msg>
  </div>
</template>

<script>
export default {
  methods: {
    changeIcon () {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'waiting'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'success'
      }
    }
  },
  data () {
    return {
      description: 'msg description',
      icon: '',
      buttons: [{
        type: 'primary',
        text: 'primary button',
        onClick: this.changeIcon.bind(this)
      }, {
        type: 'default',
        text: 'secondary button',
        link: '/demo'
      }]
    }
  }
}
</script>