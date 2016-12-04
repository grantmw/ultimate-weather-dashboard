import { CURRENT } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {
		case CURRENT:
			return action.payload.data
		default:
			return state
	}
}
