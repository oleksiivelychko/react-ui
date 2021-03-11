import axios from "axios";

const API_AUTH_URL = process.env.REACT_APP_SERVER_URL + '/api/auth';

class AuthService {
    login(email, password) {
        return axios
            .post(API_AUTH_URL + '/login/', {email, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
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
    }
}

export default new AuthService();
