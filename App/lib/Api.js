import store from './createStore';
import { URL } from '../constants/api';

const getUserToken = () => {
    const state = store.getState();
    return state.auth.user && state.auth.user.token;
}

export const POST = async(path, body) => {
    const token = getUserToken;
    if(!token) {
        throw new Error('User Must be logged in');
    }
    const response = await fetch(URL+path,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'JWT '+token
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

export const GET = async(path, body) => {
    const token = getUserToken;
    if(!token) {
        throw new Error('User Must be logged in');
    }
    const response = await fetch(URL+path,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'JWT '+token
        },
    });
    const data = await response.json();
    return data;
}
