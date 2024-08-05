import {get,post} from "./requester";

const URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await post(`${URL}/login`, { email, password });
    return authData;
}

export const register = (email, password) => post(`${URL}/register`, { email, password });

export const logout = () => get(`${URL}/logout`);