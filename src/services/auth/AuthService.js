import axios from "axios";

const API_AUTH_URL = process.env.REACT_APP_SERVER_URL + '/api/auth';

class AuthService {
    login(username, password) {
        return axios
            .post(API_AUTH_URL + '/login/', {username, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username, email, password) {
        return axios
            .post(API_AUTH_URL + '/register/', {username, email, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    return response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export default new AuthService();
