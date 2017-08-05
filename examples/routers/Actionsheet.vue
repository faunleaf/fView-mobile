<template>
  <div>
    <i-group>
      <i-switch title="一般使用" v-model="show1"></i-switch>
      <i-switch title="显示取消菜单" v-model="show1"></i-switch>
      <i-switch title="显示提示文字" v-model="show1"></i-switch>
      <i-switch title="使用数组定义菜单" v-model="show1"></i-switch>
    </i-group>

    <i-actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></i-actionsheet>
    
    <i-toast v-model="showSuccess">删除成功</i-toast>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      showSuccess: false
    }
  },
  methods: {
    click (key) {
      console.log(key)
    },
    onDelete () {
      this.showSuccess = true
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>
