import axios from 'axios';

export const retrieveErrorMeta = (errorCode) => dispatch => {
	axios.get('/api/records/retrieve')
};

/*export const loginUser = (email, password) => dispatch => {
  axios.post('/api/users/login', { email, password })
    .then(res => res.data)
    .then(user => dispatch(login(user)))
    .catch(err => console.error(err));
};

export const loginUser = (email, password) => dispatch => {
  axios.get('/api/records/home', {})
    .then(res => res.data)
    .then(user => dispatch(login(user)))
    .catch(err => console.error(err));
};
*/