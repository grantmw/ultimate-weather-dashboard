import { GET_FIVE_DAY } from '../actions/index';

export default function(state = null, action) {
	switch (action.type) {
		case GET_FIVE_DAY:
			return action.payload.data
		default:
			return state
	}
}
