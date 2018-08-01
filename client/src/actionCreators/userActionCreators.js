import { LOGIN_USER, LOGOUT_USER } from '../constants/userConstants'
import axios from 'axios';

// normal action creators
export const login = user => ({
  type: LOGIN_USER, user
});

export const logout = () => ({
  type: LOGOUT_USER
});

// thunks
export const loginUser = (email, password) => dispatch => {
  axios.post('/api/users/login', { email, password })
    .then(res => res.data)
    .then(user => dispatch(login(user)))
    .catch(err => console.error(err));
};

export const logoutUser = () => dispatch => {
  axios.get('/api/users/logout')
    .then(res => res.data)
    .then(() => dispatch(logout()))
    .catch(err => console.error(err));
};

export const signupUser = (email, password) => dispatch => {
  axios.post('/api/users/signup', { email, password })
    .then(res => res.data)
    .then(user => dispatch(login(user)))
    .catch(err => console.error(err));
};

export const checkOAuth = () => dispatch => {
  axios.get('/api/users/me')
    .then(res => res.data)
    .then(user => {
      if (user) dispatch(login(user));
    })
    .catch(err => console.error(err));
}
