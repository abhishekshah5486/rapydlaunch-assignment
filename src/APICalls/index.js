import axios from 'axios';

export const axiosInstance = axios.create({
    headers: {
        'Content-Type' : 'application/json',
    },
    proxy: {
        host: 'localhost',  
        port: 8081        
    }
})