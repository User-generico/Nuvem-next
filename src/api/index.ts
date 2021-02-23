import axios from "axios";

const api = axios.create({
    baseURL: "https://nuvem-form.herokuapp.com"
})

export default api;