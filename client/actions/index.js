import axios from 'axios';

const API_KEY = '3c18d158a054e92fbba2b133ccb926b7';
const FIVE_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const CURR_URL = `//api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const GET_FIVE_DAY = 'GET_FIVE_DAY';
export const CURRENT = 'CURRENT';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const REMOVE_SEARCH_ERROR = 'REMOVE_SEARCH_ERROR';

// var cityDispatchError = () => {
// 	dispatch({
// 		type: SEARCH_ERROR,
// 		payload: 'searchError',
// 		message: 'COULD NOT ACCESS WEATHER DATA'
// 	})
// }

export function getFiveDay(city) {
	//api request
	const url = `${FIVE_URL}&q={${city}},{us}`;
	const request = axios.get(url); //request is promise, doesn't contain anything until done
	// return {
	// 	type: GET_FIVE_DAY,
	// 	payload: request
	// };
	return (dispatch) => {
		request
		.then((data) => {
			dispatch({
				type: GET_FIVE_DAY,
				payload: data,
			});
			dispatch({type: REMOVE_SEARCH_ERROR});
		})
		.catch((data) => {
			dispatch({
				type: SEARCH_ERROR,
				payload: 'searchError',
				message: 'COULD NOT ACCESS WEATHER DATA'
			})
		})
	};
}

export function getCurrent(city) {
	const url = `${CURR_URL}&q={${city}},{us}`;
	const request = axios.get(url);
	// return {
	// 	type: CURRENT,
	// 	payload: request
	// };
	return (dispatch) => {
		request
		.then((data) => {
			dispatch({
				type: CURRENT,
				payload: data
			})
			dispatch({type: REMOVE_SEARCH_ERROR});
		})
		.catch((data) => {
			dispatch({
				type: SEARCH_ERROR,
				payload: 'searchError',
				message: 'COULD NOT ACCESS WEATHER DATA'
			})
		})
	}
}

//api.openweathermap.org/data/2.5/weather?appid=3c18d158a054e92fbba2b133ccb926b7&q={san fran,{us}