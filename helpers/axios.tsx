import axios from "axios";

const requestAxios = axios.create({
    baseURL: "http://localhost:8000/api"
});

export default requestAxios;