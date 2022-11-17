import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

export default axios.create({
    baseURL: BASE_URL,
    validateStatus: (status) => status >= 200 && status < 300,
    timeout: 120000,
});