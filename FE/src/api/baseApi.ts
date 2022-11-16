import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_BASE_URL : "http://localhost:5000";

export default axios.create({
    baseURL: BASE_URL,
    validateStatus: (status) => status >= 200 && status < 300,
    timeout: 120000,
});