import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/'

const apiInstance = axios.create({
    baseURL: API_URL,
})

export default apiInstance;
