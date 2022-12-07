import axios from 'axios';

 const baseURL = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {'X-Custom-Header': 'foobar'}
});

export default baseURL;