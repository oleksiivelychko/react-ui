import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = process.env.SERVER_URL + '/api';

class UserService {
    getUser() {
        return axios.get(API_URL + '/auth/me/', { headers: authHeader() });
    }
    refreshToken() {
        return axios.get(API_URL + '/auth/refresh/', { headers: authHeader() });
    }
}

export default new UserService();
