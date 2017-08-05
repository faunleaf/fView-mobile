<template>
  <div style="width: 95%;margin: 0 auto;">
    <i-hr></i-hr>
    <div>
      <i-step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <i-step-item title="done"></i-step-item>
        <i-step-item title="processing"></i-step-item>
        <i-step-item title="end"></i-step-item>
      </i-step>
      <div class="btn_wrap">
        <i-button type="primary" @click.native="nextStep">next step</i-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      step1: 1,
      step2: 0
    }
  },
  methods: {
    nextStep () {
      this.step2 ++
    }
  }
}
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>
