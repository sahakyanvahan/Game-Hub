import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '53a34762d8c14b83b017a6d734aa82b3'
    }
})