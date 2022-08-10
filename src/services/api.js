import axios from "axios";

const Api = axios.create({
    baseURL: 'https://tapgames-heroku.herokuapp.com',
    headers: {
        'Content-Type':'application/json'
    }
});

export default Api;