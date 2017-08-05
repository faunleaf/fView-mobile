<template>
  <div class="weui-cell vux-cell-form-preview" :class="{'vux-cell-no-border-intent': !borderIntent}">
    <div class="weui-form-preview__bd">
      <div class="weui-form-preview__item" v-for="item in list">
        <label class="weui-form-preview__label" v-html="item.label"></label>
        <span class="weui-form-preview__value" v-html="item.value"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    borderIntent: {
      type: Boolean,
      default: true
    }
  }
}
</script>
