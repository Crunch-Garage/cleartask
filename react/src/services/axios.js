import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEAPIURL || 'http://127.0.0.1:8080';

const instance = axios.create({
    baseURL: baseURL,
    headers: {"Content-Type": "application/json"}
  });

export default instance;