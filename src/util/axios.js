import axios from "axios"

const instance = axios.create({ baseURL: "http://localhost:3004" })

instance.defaults.headers.common['Authorization'] = ""

export default instance