<template>
  <div>
    <i-number-roller :number="number" :width="6" class="vux-center-h"></i-number-roller>
    <i-divider>set width dynamically</i-divider>
    <i-number-roller :number="number2" :width="length" class="vux-center-h"></i-number-roller>
  </div>
</template>

<script>
export default {
  ready () {
    setInterval(() => {
      this.number = 100000 + Math.round(Math.random() * 899999)
    }, 3000)
    setTimeout(() => {
      this.number2 = 333
    }, 3000)
    setTimeout(() => {
      this.number2 = 333
    }, 5000)
    setTimeout(() => {
      this.number2 = 88
    }, 8000)
  },
  computed: {
    length () {
      return String(this.number2).length
    }
  },
  data () {
    return {
      number: 123765,
      number2: 88
    }
  }
}
</script>
