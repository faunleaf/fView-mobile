import iConfirm from './confirm.js';

let confirmInstance;

function getConfirmInstance() {
    confirmInstance = confirmInstance || iConfirm.newInstance();
    return confirmInstance;
}

iConfirm.show = function(options) {
	let instance  = getConfirmInstance();
	options.onRemove = function () {
	    confirmInstance = null;
	};

	instance.show(options);
}

iConfirm.remove = function () {
    if (!confirmInstance) {
        return false;
    }

    const instance = getConfirmInstance();

    instance.remove();
};

export default iConfirm;