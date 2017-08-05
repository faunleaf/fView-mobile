<template>
  <div>
    <br>
    <i-progress :percent="percent1"></i-progress>
    <br>
    <div style="margin:10px">
      <i-progress :percent="percent2" :show-cancel="false"></i-progress>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent1: 30,
      percent2: 60
    }
  }
}
</script>
