import axios from "axios"

const apiInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json", //expecting json format
        Accept: "application/json" //only accepting json format
    }
})

export default apiInstance