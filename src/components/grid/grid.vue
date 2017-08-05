<template>
  <div class="weui-grids">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Number,
      default: 3
    }
  }
}
</script>
