import axios from "axios";

// 58832000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api;