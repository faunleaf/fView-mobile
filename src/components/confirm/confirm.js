import Vue from 'vue';
import iConfirm from './confirm.vue';
import { camelcaseToHyphen } from '../../libs/naming_convert';

iConfirm.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <i-confirm${props} v-model="visible" :title="title" :content="content" :hide-on-blur="hideOnBlur" :confirm-text="confirmText" :cancel-text="cancelText" @on-hide="remove" @on-confirm="onConfirm" @on-cancel="onCancel">
        </i-confirm>
    `;
    document.body.appendChild(div);

    const confirm = new Vue({
        el: div,
        components: { iConfirm },
        data: Object.assign(_props, {
            visible: false,
            title: '',
            content: '',
            hideOnBlur: false,
            confirmText: '',
            cancelText: '',
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
            onConfirm () {},
            onCancel () {},
            onRemove () {}
        }
    });

    return {
        show (props) {
            if ('title' in props) {
                confirm.title = props.title;
            }

            if ('content' in props) {
                confirm.content = props.content;
            }

            if ('hideOnBlur' in props) {
                confirm.hideOnBlur = props.hideOnBlur;
            }

            if ('confirmText' in props) {
                confirm.confirmText = props.confirmText;
            }

            if ('onConfirm' in props) {
                confirm.onConfirm = props.onConfirm;
            }

            if ('cancelText' in props) {
                confirm.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                confirm.onCancel = props.onCancel;
            }

            // notice when component destroy
            confirm.onRemove = props.onRemove;

            confirm.visible = true;
        },
        remove () {
            confirm.visible = false;
        }
    };
};

export default iConfirm;