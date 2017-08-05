import Vue from 'vue';
import iLoading from './loading.vue';
import { camelcaseToHyphen } from '../../libs/naming_convert';

iLoading.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <i-loading${props} v-model="visible" :text="text">
        </i-loading>
    `;
    document.body.appendChild(div);

    const loading = new Vue({
        el: div,
        components: { iLoading },
        data: Object.assign(_props, {
            visible: false,
            text: ''
        }),
        methods: {
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onRemove () {},
        }
    });

    return {
        show (props) {
            if ('text' in props) {
                loading.text = props.text;
            }

            // notice when component destroy
            loading.onRemove = props.onRemove;

            loading.visible = true;
        },
        remove () {
            loading.visible = false;
            loading.remove();
        }
    };
};

export default iLoading;