<template>
    <div class="weui-tabbar">
        <slot></slot>
    </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
    props: {
        iconClass: String
    },
    mixins: [parentMixin]
}
</script>
