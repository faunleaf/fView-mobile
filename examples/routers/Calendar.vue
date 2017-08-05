<template>
  <div>
    <i-group>
      <i-calendar v-model="demo3" title="disable future" disable-future></i-calendar>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY'
    }
  }
}
</script>
