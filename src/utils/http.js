import axios from "axios";

const httpInstance = axios.create({
    baseURL: "https://api.example.com",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpInstance;
