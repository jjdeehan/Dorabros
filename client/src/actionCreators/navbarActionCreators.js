import axios from 'axios';
import { UPDATE_PAGE } from '../constants/navbarConstants'


export const newPage = (view, headerImageSource) => ({
	view,
	headerImageSource,
	type: UPDATE_PAGE
})


export const updatePage = (page, headerImageSource) => dispatch => {
	dispatch(newPage(page, headerImageSource))
};