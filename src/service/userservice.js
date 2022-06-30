import axios from 'axios';

export const userSignin = (userObj) => {
    let response = axios.post('http://localhost:4000/api/v1/users/login',userObj);
    return response;
}

export const userSignup = (userObj) => {
    let response = axios.post('http://localhost:4000/api/v1/users/signup',userObj);
    return response;
}