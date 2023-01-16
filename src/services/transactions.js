import axios from "axios";
import { baseUrl, getToken } from "./common";

export const retrieveTransactions = async (data, setTransactionsRow, setValid) => {
	const token = getToken();
	const config = {
		method: 'post',
		url: baseUrl + '/api/transactions/',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		data: data
	};
	await axios(config)
		.then((response) => {
			setTransactionsRow(response.data);
			if (response.status === 200 && response.data.length > 0) {
				setValid(true)
			}
			console.log(response)
			return response
		})
		.catch((error) => {
			console.log(error)
			alert('Error: ' + error.response.data[0].message);
		});
}

