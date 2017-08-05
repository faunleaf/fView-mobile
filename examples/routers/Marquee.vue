<template>
  <div>
    <i-divider>Default usage</i-divider>
    <i-marquee>
      <i-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</i-marquee-item>
    </i-marquee>
    <br>
    <i-divider>Used in a cell</i-divider>
    <i-group>
      <i-cell title="News">
        <i-marquee>
          <i-marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language {{i}}</i-marquee-item>
        </i-marquee>
      </i-cell>
    </i-group>
    <br>
    <i-divider>Async data</i-divider>
    <i-marquee>
      <i-marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</i-marquee-item>
    </i-marquee>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.asyncCount = 5
    }, 1000)
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  },
  data () {
    return {
      asyncCount: 0
    }
  }
}
</script>

<style scoped>
.align-middle {
  text-align: center;
}
</style>