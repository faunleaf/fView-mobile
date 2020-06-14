import Vue from 'vue';
import iAlert from './alert.vue';
import { camelcaseToHyphen } from '../../libs/naming_convert';

iAlert.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `
        <i-alert${props} v-model="visible" :title="title" :content="content" :button-text="buttonText" @on-hide="remove">
        </i-alert>
    `;
    document.body.appendChild(div);

    const alert = new Vue({
        el: div,
        components: { iAlert },
        data: Object.assign(_props, {
            visible: false,
            title: '',
            content: '',
            buttonText: ''
        }),
        methods: {
            remove () {
                this.onHide();
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onHide() {},
            onRemove () {},
        }
    });

    return {
        show (props) {
            if ('title' in props) {
                alert.title = props.title;
            }

            if ('content' in props) {
                alert.content = props.content;
            }

            if ('buttonText' in props) {
                alert.buttonText = props.buttonText;
            }

            if ('onHide' in props) {
                alert.onHide = props.onHide;
            }

            // notice when component destroy
            alert.onRemove = props.onRemove;

            alert.visible = true;
        },
        remove () {
            alert.visible = false;
        }
    };
};

export default iAlert;