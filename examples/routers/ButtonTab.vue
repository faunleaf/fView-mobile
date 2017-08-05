<template>
  <div>
    <div style="padding: 15px;">
      <i-button-tab>
        <i-button-tab-item>Today</i-button-tab-item>
        <i-button-tab-item selected>This Week</i-button-tab-item>
        <i-button-tab-item>This Month</i-button-tab-item>
      </i-button-tab>      
      <br>
      <i-divider>Use v-model to set selected item</i-divider>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    consoleIndex () {
      console.log('click demo01', this.demo01)
    }
  },
  data () {
    return {
      demo01: 0
    }
  }
}
</script>
