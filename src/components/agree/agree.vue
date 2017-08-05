<template>
    <label :for="`vux-agree-${uuid}`" class="weui-agree">
        <input :id="`vux-agree-${uuid}`" type="checkbox" v-model="currentValue" class="weui-agree__checkbox">
        <span class="weui-agree__text">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import uuidMixin from '../../mixins/uuid'

export default {
    data () {
        return {
            currentValue: false
        }
    },
    mixins: [uuidMixin],
    props: {
        value: Boolean
    },
    created() {
        this.currentValue = this.value
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            this.$emit('input', val)
        }
    }
}
</script>
