import { GET_FIVE_DAY } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case GET_FIVE_DAY:
		return state.concat([action.payload.data]); 
	}

	return state
}