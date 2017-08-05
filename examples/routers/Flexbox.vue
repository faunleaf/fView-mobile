<template>
  <div>
    <i-divider>Horizontal</i-divider>
    <i-flexbox>
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox>
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">3</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox>
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">3</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">4</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox>
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">3</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">4</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">5</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox>
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">3</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">4</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">5</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">6</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>Honrizontal with no gutter</i-divider>
    <i-flexbox :gutter="0">
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">3</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">4</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>Vertical</i-divider>
    <i-flexbox orient="vertical">
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>Vertical with no gutter</i-divider>
    <i-flexbox orient="vertical" :gutter="0">
      <i-flexbox-item><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>Grid support(12 columns)</i-divider>
    <i-flexbox>
      <i-flexbox-item :span="4"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">2/3</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox>
      <i-flexbox-item :span="6"><div class="flex-demo">6/12</div></i-flexbox-item>
      <i-flexbox-item :span="2"><div class="flex-demo">2/12</div></i-flexbox-item>
      <i-flexbox-item ><div class="flex-demo">rest</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>flexiable grid</i-divider>
    <i-flexbox>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/6"><div class="flex-demo">1/6</div></i-flexbox-item>
      <i-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></i-flexbox-item>
      <i-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">rest</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-flexbox :gutter="0">
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/6"><div class="flex-demo">1/6</div></i-flexbox-item>
      <i-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></i-flexbox-item>
      <i-flexbox-item :span="1/8"><div class="flex-demo">1/8</div></i-flexbox-item>
      <i-flexbox-item><div class="flex-demo">rest</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>flexiable grid</i-divider>
    <i-flexbox :gutter="0">
      <i-flexbox-item :span="1/3" :order="4"><div class="flex-demo">1</div></i-flexbox-item>
      <i-flexbox-item :span="1/6" :order="3"><div class="flex-demo">2</div></i-flexbox-item>
      <i-flexbox-item :span="1/8" :order="2"><div class="flex-demo">3</div></i-flexbox-item>
      <i-flexbox-item :span="1/8" :order="1"><div class="flex-demo">4</div></i-flexbox-item>
      <i-flexbox-item :order="-99"><div class="flex-demo">5</div></i-flexbox-item>
    </i-flexbox>
    <br>
    <i-divider>flex-wrap</i-divider>
    <i-flexbox :gutter="0" wrap="wrap">
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
      <i-flexbox-item :span="1/3"><div class="flex-demo">1/3</div></i-flexbox-item>
    </i-flexbox>
    
  </div>
</template>

<script>
</script>

<style lang="less">
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
