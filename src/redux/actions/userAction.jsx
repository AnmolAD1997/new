import { STORE_CREDENTIALS, ADD_USERID, ADD_ROLE, ADD_USER_OBJECT, LOGGED_IN, LOGGED_OUT } from './actionTypes';

export const dispatchToken = (token) => {
    console.log("You stored the token: ", token);
    return {
        type: STORE_CREDENTIALS,
        payload: token
    }
};

export const dispatchUserID = (userID) => {
    return {
        type: ADD_USERID,
        payload: userID
    }
}

export const dispatchRole = (role) => {
    return {
        type: ADD_ROLE,
        payload: role
    }
}

export const dispatchUserObject = (user) => {
    return {
        type: ADD_USER_OBJECT,
        payload: user
    }
}

export const dispatchLoggedIn= ()=>{
    return {type: LOGGED_IN}
}

export const dispatchLoggedOut= ()=>{
    return {type: LOGGED_OUT}
}