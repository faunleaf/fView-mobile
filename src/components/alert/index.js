import iAlert from './alert.js';

let alertInstance;

function getAlertInstance() {
    alertInstance = alertInstance || iAlert.newInstance();
    return alertInstance;
}

iAlert.show = function(options) {
	let instance  = getAlertInstance();
	options.onRemove = function () {
	    alertInstance = null;
	};

	instance.show(options);
}

iAlert.remove = function () {
    if (!alertInstance) {
        return false;
    }

    const instance = getAlertInstance();

    instance.remove();
};

export default iAlert;