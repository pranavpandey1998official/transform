import { AsyncStorage } from 'react-native';

import Navigation from '../lib/Navigation';
import { URL } from '../constants/api';
import { login } from '../actions/auth';
import { getRoutes } from '../actions/routes';
import { getBookedTickets } from '../actions/bookedTickets'

export default appInit = () => {
    return async (dispatch, getstate) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                return Navigation.navigate('Auth');
            }

            const response = await fetch(URL + 'user/data', {
                method: 'POST',
                timeout: 2000,
                headers: {
                    Authorization: 'JWT ' + token
                }
            });
            if (response.status === 200) {
                const user = await response.json();
                await dispatch(login(user));
                await dispatch(getRoutes());
                await dispatch(getBookedTickets());
                return Navigation.navigate('App');
            }
            return Navigation.navigate('Auth');
        } catch (e) {
            console.log('app_init', e);
        }
        dispatch();
    }
}