import axios from 'axios';

const setDefaultConfig = () => {
    console.log('Setting default config for axios');

    // Setting base url
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
    
    // Interceptors
    axios.interceptors.response.use( response => {
        // Do something when operation is successfully

        return response;
    }, error => {
        console.log(`Error dispatching from axios => ${error}`)

        return Promise.reject(error);
    })
}

export default setDefaultConfig;