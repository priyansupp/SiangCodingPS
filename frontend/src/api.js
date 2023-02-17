import Axios from 'axios';
const baseURL = 'http://localhost:8000/api/';

export const axios = Axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});
