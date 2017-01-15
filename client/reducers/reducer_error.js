import { SEARCH_ERROR } from '../actions/index';
import { REMOVE_SEARCH_ERROR } from '../actions/index';

export default function(state = {}, action) {
	switch (action.type) {
		case SEARCH_ERROR:
			return Object.assign({}, state, { errorType: action.payload, message: action.message });
		case REMOVE_SEARCH_ERROR:
			return {};
	}
	return state
}