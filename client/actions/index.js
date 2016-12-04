import axios from 'axios';

const API_KEY = '3c18d158a054e92fbba2b133ccb926b7';
const FIVE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const CURR_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const GET_FIVE_DAY = 'GET_FIVE_DAY';
export const CURRENT = 'CURRENT';


export function getFiveDay(city) {
	//api request
	const url = `${FIVE_URL}&q={${city}},{us}`;
	const request = axios.get(url); //request is promise, doesn't contain anything until done
	return {
		type: GET_FIVE_DAY,
		payload: request
	};
}

export function getCurrent(city) {
	const url = `${CURR_URL}&q={${city}},{us}`;
	const request = axios.get(url);
	return {
		type: CURRENT,
		payload: request
	};
}

