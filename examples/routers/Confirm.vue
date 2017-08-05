<template>
  <div>
    <i-group>
      <i-switch title="Toggle" v-model="show"></i-switch>
    </i-group>
    <div v-transfer-dom>
      <i-confirm v-model="show"
      title="confirm deleting the item"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">Are you sure?</p>
      </i-confirm>
    </div>
    <br>
    <div style="padding:15px;">
      <i-button @click.native="showPlugin" type="primary">Show</i-button>
    </div>
    <div style="padding:15px;">
      <i-button @click.native="showPlugin2" type="primary">Plugin usage</i-button>
    </div>
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
    onCancel () {
      console.log('on cancel')
    },
    onConfirm () {
      console.log('on confirm')
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$Confirm.show({
        title: 'Title',
        content: 'Content',
        onConfirm () {
          console.log('plugin confirm')
        },
        onCancel () {
          console.log('plugin cancel')
        }
      })
    },
    showPlugin2 () {
      this.showPlugin()
    }
  }
}
</script>
