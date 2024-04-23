import axios from 'axios'
import 'dotenv/config'

const instance = axios.create({
    baseURL: process.env.API_URL
});

/**
 * Catch the AunAuthorized Request
 */
instance.interceptors.response.use((response) => response, (error) => {

    if (error.response.status === 401) {}
});

export default instance;
