function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const AUTH = createRequestTypes('AUTH', [
    'LOGIN_SUCCESS',
    'LOGOUT',
    'ERROR'
]) ;

export const APP = createRequestTypes('APP',[
    'INIT'
]) 


export const ROUTE = createRequestTypes('ROUTE', [
    'SET'
])


export const TICKET = createRequestTypes('TICKET', [
    'SET',
    'REMOVE',
    'SET_PAYMENT_MODE'
]);

export const BOOKED_TICKETS = createRequestTypes('BOOKED_TICKETS', [
    'GET',
    'ADD'
])