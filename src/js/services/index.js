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
    return axios.post(`${base}/register`, params, headers);
}