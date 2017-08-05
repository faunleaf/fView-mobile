<template>
  <div>
    <br/>
    <br/>
    <br/>
    <div style="height:44px;">
      <i-sticky scroll-box="vux_view_box_body" :offset="46" :check-sticky-support="false">
        <i-tab :line-width="1">
          <i-tab-item selected>正在正映</i-tab-item>
          <i-tab-item>即将上映</i-tab-item>
        </i-tab>
      </i-sticky>
    </div>
    <p v-for="i in 100">{{i}}<br></p>
  </div>
</template>

<script>
</script>
