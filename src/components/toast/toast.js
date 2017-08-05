import Vue from 'vue';
import iToast from './toast.vue';
import { camelcaseToHyphen } from '../../libs/naming_convert';

iToast.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <i-toast${props} v-model="visible" :text="text" :type="type" :time="time" :position="position" @on-hide="remove">
        </i-toast>
    `;
    document.body.appendChild(div);

    const toast = new Vue({
        el: div,
        components: { iToast },
        data: Object.assign(_props, {
            visible: false,
            text: '',
            type: 'text',
            time: 2000,
            position: ''
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
                toast.text = props.text;
            }

            if ('type' in props) {
                toast.type = props.type;
            }

            if ('time' in props) {
                toast.time = props.time;
            }

            if ('position' in props) {
                toast.position = props.position;
            }

            // notice when component destroy
            toast.onRemove = props.onRemove;

            toast.visible = true;
        },
        remove () {
            toast.visible = false;
        }
    };
};

export default iToast;