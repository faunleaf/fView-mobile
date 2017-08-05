import iToast from './toast.js';

let toastInstance;

function getToastInstance() {
    toastInstance = toastInstance || iToast.newInstance();
    return toastInstance;
}

iToast.show = function(options) {
	let instance  = getToastInstance();
	options.onRemove = function () {
	    toastInstance = null;
	};

	instance.show(options);
}

iToast.remove = function () {
    if (!toastInstance) {
        return false;
    }

    const instance = gettoastInstance();

    instance.remove();
};

export default iToast;