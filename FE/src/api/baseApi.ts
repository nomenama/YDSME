import axios from "axios";

const BASE_URL = "http://localhost:8080";

export default axios.create({
    baseURL: BASE_URL,
    validateStatus: (status) => status >= 200 && status < 300,
    timeout: 3000,
});