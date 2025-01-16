import axios from 'axios';

export const filesApi = axios.create({
    baseURL: 'http://localhost:3000/files'
});