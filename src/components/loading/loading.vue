<template>
    <transition name="vux-mask">
        <div class="weui-loading_toast" v-show="show">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast" :style="{ position: position }">
                <i class="weui-loading weui-icon_toast"></i>
                <p class="weui-toast__content">{{ text || t('i.loading.loading') }}<slot></slot></p>
            </div>
        </div>
    </transition>
</template>

<script>
import Locale from '../../mixins/locale';

export default {
    data () {
        return {
            show: false
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        text: String,
        position: String
    },
    mixins: [ Locale ],
    created () {
        this.show = this.value
    },
    watch: {
        value (val) {
            this.show = val
        },
        show (val) {
            this.$emit('input', val)
        }
    }
}
</script>
