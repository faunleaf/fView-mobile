<template>
  <div>
    <i-group title="Used in a Cell">
      <i-cell title="single digit" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">New Message &nbsp;</span>
          <i-badge text="8"></i-badge>
        </div>
      </i-cell>
      <i-cell title="Big Number" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">New Message &nbsp;</span>
          <i-badge text="888"></i-badge>
        </div>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
</script>

<style lang="less">
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
