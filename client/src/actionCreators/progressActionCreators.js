import { UPDATE_PROGRESS } from '../constants/progressConstants'
import axios from 'axios';


export const updateProgress = (progress) => ({
	progress,
  type: UPDATE_PROGRESS
});


export const checkProgress = () => dispatch => {
	console.log('api progess call')
  axios.get('https://api.virginmoneygiving.com/fundraisers/v1/account/12558fe6-54e4-4acd-9b4b-348b7ba9c160/pages/2.json?api_key=nf5v8pwu496fzpey27tzc29s',{
    headers: {'Access-Control-Allow-Origin': '*'}
})
    .then(body => {
    				const obj = JSON.parse(body)
			const raised = obj.pageDetails[0].donationTotalGross
			const target = obj.pageDetails[0].targetAmount
			return JSON.stringify([raised,target])
    })
    .then(progress => {
      if (progress) dispatch(updateProgress(progress[0]/progress[1]));
    })
    .catch(err => console.error(err));
}
