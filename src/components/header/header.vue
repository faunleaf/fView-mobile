<template>
    <div class="vux-header">
        <div class="vux-header-left">
            <transition :name="transition">
                <a class="vux-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">{{ typeof _leftOptions.backText === 'undefined' ? t('i.header.back_text') : _leftOptions.backText}}</a>
            </transition>
            <transition :name="transition">
                <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
            </transition>
            <slot name="left"></slot>
        </div>
        <h1 class="vux-header-title" @click="$emit('on-click-title')">
            <slot>
                <transition :name="transition">
                    <span v-show="title">{{title}}</span>
                </transition>
            </slot>
        </h1>
        <div class="vux-header-right">
            <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
import Locale from '../../mixins/locale';

export default {
    props: {
        leftOptions: Object,
        title: String,
        transition: String,
        rightOptions: {
            type: Object,
            default () {
                return {
                    showMore: false
                }
            }
        }
    },
    mixins: [ Locale ],
    computed: {
        _leftOptions () {
            return Object.assign({
                showBack: true,
                preventGoBack: false
            }, this.leftOptions)
        }
    },
    methods: {
        onClickBack () {
            if (this._leftOptions.preventGoBack) {
                this.$emit('on-click-back')
            } else {
                this.$router ? this.$router.back() : window.history.back()
            }
        }
    }
}
</script>
