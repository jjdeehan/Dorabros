import { UPDATE_PROGRESS } from '../constants/progressConstants'
import axios from 'axios';


export const updateProgress = (progress) => ({
	progress,
  type: UPDATE_PROGRESS
});


export const checkProgress = () => dispatch => {
	console.log('api progess call')
  axios.get('/api/progress')
    .then(res => res.data)
    .then(progress => {
      if (progress) dispatch(updateProgress(progress[0]/progress[1]));
    })
    .catch(err => console.error(err));
}
