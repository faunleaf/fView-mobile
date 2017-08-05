import {
	UPDATE_LOADING,
	UPDATE_DIRECTION,
	UPDATE_POSITION
} from './mutation-types.js'

import {
	setStore,
	getStore,
} from '../utils/mUtils'

export default {
	[UPDATE_LOADING](state, status) {
		state.isLoading = status;
	},
	[UPDATE_DIRECTION](state, direction) {
		state.direction = direction;
	},
	[UPDATE_POSITION](state, position) {
		state.demoScrollTop = position;
	}
}
