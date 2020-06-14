<template>
  <div class="vux-actionsheet">
    <transition name="vux-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>
    <div class="weui-skin_android" v-if="theme === 'android'">
      <transition name="vux-android-actionsheet">
        <div class="weui-actionsheet" v-show="show">
          <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell" v-for="(text, key) in menus" @click="
              onMenuClick(text, key)" v-html="text.label || text" :class="`vux-actionsheet-menu-${text.type || 'default'}`">
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}" v-else>
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header"></slot>
        </div>
        <div class="weui-actionsheet__cell" v-for="(text, key) in menus" @click="onMenuClick(text, key)" v-html="text.label || text" :class="`vux-actionsheet-menu-${text.type || 'default'}`">
        </div>
      </div>
      <div class="weui-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
        <div class="weui-actionsheet__cell">{{ cancelText || t('i.actionsheet.cancel') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Locale from '../../mixins/locale';

export default {
    data () {
        return {
            hasHeaderSlot: false,
            show: false
        }
    },
    props: {
        value: Boolean,
        showCancel: Boolean,
        cancelText: String,
        theme: {
            type: String,
            default: 'ios'
        },
        menus: {
            type: [Object, Array],
            default: () => ({})
        },
        closeOnClickingMask: {
            type: Boolean,
            default: true
        },
        closeOnClickingMenu: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onMenuClick (text, key) {
            if (typeof text === 'string') {
                this.emitEvent('on-click-menu', key, text)
            } else {
                if (text.type !== 'disabled' && text.type !== 'info') {
                    if (text.value) {
                        this.emitEvent('on-click-menu', text.value, text)
                    } else {
                        this.emitEvent('on-click-menu', '', text)
                        this.show = false
                    }
                }
            }
        },
        onClickingMask () {
            this.$emit('on-click-mask')
            this.closeOnClickingMask && (this.show = false)
        },
        emitEvent (event, menu, item) {
            if (event === 'on-click-menu' && !/.noop/.test(menu)) {
                let _item = item
                if (typeof _item === 'object') {
                    _item = JSON.parse(JSON.stringify(_item))
                }
                this.$emit(event, menu, _item)
                this.$emit(`${event}-${menu}`)
                this.closeOnClickingMenu && (this.show = false)
            }
        },
        fixIos (zIndex) {
            if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
                return
            }
            if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
                this.$tabbar.style.zIndex = zIndex
            }
        }
    },
    mounted () {
        this.hasHeaderSlot = !!this.$slots.header
        this.$nextTick(() => {
            this.$tabbar = document.querySelector('.weui-tabbar')
        })
    },
    beforeDestroy () {
        this.fixIos(100)
    },
    watch: {
        show (val) {
            this.$emit('input', val)
            if (val) {
                this.fixIos(-1)
            } else {
                setTimeout(() => {
                    this.fixIos(100)
                }, 200)
            }
        },
        value: {
            handler: function (val) {
                this.show = val
            },
            immediate: true
        }
    }
}
</script>
