import axios from 'axios';

const api = axios.create({
    baseURL: 'https://curso-javascript.herokuapp.com',
});

export default api;