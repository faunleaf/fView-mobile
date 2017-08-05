<template>
  <div>
    <i-divider>with footer</i-divider>
     <i-card :header="{title:'商品详情'}" :footer="{title:'查看更多',link:'/component/panel'}">
      <p slot="content" class="card-padding">custom content</p>
    </i-card>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
