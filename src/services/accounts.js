import axios from "axios";
import { baseUrl, getToken } from "./common";

export const retrieveAccount = (data) => {
	const token = getToken();
	const config = {
		method: 'post',
		url: baseUrl + '/api/accounts/',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		data: data
	};
	axios(config)
		.then((response) => {
			return response
		})
		.catch((error) => {
			console.log(error);
		});
}

