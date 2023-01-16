import axios from "axios";
import { baseUrl, getToken } from "./common";


export const getInstitutions =async(setRow, setValid)=>{
    const token = getToken();
    let config = {
        method: 'get',
        url: baseUrl +'/api/institutions/?page=1',
        headers: {
            'Authorization': token
        }
    };
    await axios(config)
    .then((response)=>{
        setRow(response.data)
        setValid(true);
        return response.data;
    });
    
}