<template>
  <div>
    <i-dialog
    v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    :hide-on-blur="hideOnBlur"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{title}}</strong></div>
      <div class="weui-dialog__bd"><slot><div v-html="content"></div></slot></div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="_onCancel">{{cancelText || t('i.confirm.cancel_text')}}</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="_onConfirm">{{confirmText || t('i.confirm.confirm_text')}}</a>
      </div>
    </i-dialog>
  </div>
</template>

<script>
import Locale from '../../mixins/locale';
import iDialog from '../dialog'

export default {
  mixins: [ Locale ],
  components: { iDialog },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    title: String,
    confirmText: String,
    cancelText: String,
    maskTransition: {
      type: String,
      default: 'vux-fade'
    },
    dialogTransition: {
      type: String,
      default: 'vux-dialog'
    },
    content: String
  },
  created () {
    this.showValue = this.show
    if (this.value) {
      this.showValue = this.value
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  methods: {
    _onConfirm () {
      this.showValue = false
      this.$emit('on-confirm')
    },
    _onCancel () {
      this.showValue = false
      this.$emit('on-cancel')
    }
  }
}
</script>
