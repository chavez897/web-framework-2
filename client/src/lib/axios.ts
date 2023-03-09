import axios from "axios";

const BASE_URL = "http://localhost:5001";

export default axios.create({ baseURL: BASE_URL });

//To make a request to an API endpoint that requires authentication
export const axiosPrivate = axios.create({ baseURL: BASE_URL,
headers: {'content-Type': 'application/json'},
withCredentials: true,
});
