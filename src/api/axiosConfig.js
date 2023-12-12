import axios from 'axios';

const api = axios.create({
    baseURL: 'https://upright-feasible-trout.ngrok-free.app',
    headers : { 
        "ngrok-skip-browser-warning": "true",
    }
});

export default api;