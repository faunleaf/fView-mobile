<template>
  <div>
  <div class="vux-1px-t">
    <i-swipeout>
      <i-swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <i-swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">Fav</i-swipeout-button>
          <i-swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">Delete</i-swipeout-button>
          <i-swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">Ignore</i-swipeout-button>
        </div>

        <div slot="left-menu">
          <i-swipeout-button @click.native="onButtonClick('fav')" type="primary">Fav</i-swipeout-button>
          <i-swipeout-button @click.native="onButtonClick('delete')" type="warn">Delete</i-swipeout-button>
        </div>

        <div slot="content" class="demo-content vux-1px-b">{{ 'now ' + (disabled ? 'disabled' : 'enabled') }}</div>
      </i-swipeout-item>
    </i-swipeout>
  </div>
    

    <div style="padding:15px;">
      <i-button @click.native="disabled = false" type="primary" :disabled="!disabled">set Enabled</i-button>
      <i-button @click.native="disabled = true" type="warn" :disabled="disabled">set Disabled</i-button>
      <i-button @click.native="$refs.swipeoutItem.open('left')" type="primary">open left menu</i-button>
      <i-button @click.native="$refs.swipeoutItem.open('right')" type="primary">open right menu</i-button>
      <i-button @click.native="$refs.swipeoutItem.close()" type="warn">close menu</i-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  data () {
    return {
      disabled: false
    }
  }
}
</script>

<style lang="less">
.demo-content {
  padding: 10px 10px;
}
</style>
