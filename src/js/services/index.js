import axios from 'axios';

let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

let base = 'https://ehackathon.usach.cl/api';

export const login = params => {
    return axios.post(`${base}/login`, params, headers);
}

export const register = params => {
    return axios.post(`${base}/user/`, params, headers);
}

export const falabella = params => {
	let query = "http://www.falabella.com/falabella-cl/search/?Ntt="+params.query+"&format=json"
    return axios.get(query, {params:{}}, headers);
}