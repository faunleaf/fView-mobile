import iLoading from './loading.js';

let loadingInstance;

function getLoadingInstance() {
    loadingInstance = loadingInstance || iLoading.newInstance();
    return loadingInstance;
}

iLoading.show = function(options) {
	let instance  = getLoadingInstance();
	options.onRemove = function () {
	    loadingInstance = null;
	};

	instance.show(options);
}

iLoading.remove = function () {
    if (!loadingInstance) {
        return false;
    }

    const instance = getLoadingInstance();

    instance.remove();
};

export default iLoading;