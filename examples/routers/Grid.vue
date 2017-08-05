<template>
  <div>
    <i-group-title>rows = 2</i-group-title>
    <i-grid :rows="2">
      <i-grid-item label="Grid" v-for="i in 2" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </i-grid-item>
    </i-grid>
    <i-group-title>rows = 3</i-group-title>
    <i-grid>
      <i-grid-item link="/component/cell" label="Go to Cell">
        <img slot="icon" src="../assets/grid_icon.png">
      </i-grid-item>
      <i-grid-item :link="{ path: '/component/cell'}" label="Go to Cell">
        <img slot="icon" src="../assets/grid_icon.png">
      </i-grid-item>
      <i-grid-item link="/component/cell" @on-item-click="onItemClick">
        <img slot="icon" src="../assets/grid_icon.png">
        <span slot="label">Go to Cell</span>
      </i-grid-item>
    </i-grid>
    <i-group-title>rows = 4</i-group-title>
    <i-grid :rows="4">
      <i-grid-item label="Grid" v-for="i in 4" :key="i">
        <img slot="icon" src="../assets/grid_icon.png">
      </i-grid-item>
    </i-grid>
    <i-group-title>custom content</i-group-title>
    <i-grid :rows="5">
      <i-grid-item v-for="i in 5" :key="i">
        <span class="grid-center">{{i}}</span>
      </i-grid-item>
    </i-grid>
  </div>
</template>

<script>
export default {
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
</style>
