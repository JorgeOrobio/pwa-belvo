import axios from "axios";
import { baseUrl, getToken } from "./common";

export const linkBank = (data) => {
	const token = getToken();
	const config = {
		method: 'post',
		url: baseUrl + '/api/links/',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		data: data
	};
	axios(config)
		.then((response) => {
			alert('Linked successfully')
			return response
		})
		.catch((error) => {
			console.log(error);
		});
}


export const listLinks = async (page = '1') => {
	const token = getToken();
	let config = {
		method: 'get',
		url: baseUrl + '/api/links/?page=' + page,
		headers: {
			'Authorization': token
		}
	};
	return await axios(config)
}

export const getInstitutions = async () => {
	const token = getToken();
	let config = {
		method: 'get',
		url: baseUrl + '/api/institutions/?page=1',
		headers: {
			'Authorization': token
		}
	};
	return await axios(config)
}