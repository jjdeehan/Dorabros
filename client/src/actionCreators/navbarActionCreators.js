import axios from 'axios';
import { UPDATE_PAGE, UPDATE_HEADER_IMAGE } from '../constants/navbarConstants'


export const newPage = (view, headerImageSource) => ({
	view,
	headerImageSource,
	type: UPDATE_PAGE
})

export const newHeaderImage = headerImageSource => ({
	headerImageSource,
	type: UPDATE_HEADER_IMAGE
})


export const updatePage = (page, headerImageSource) => dispatch => {
	dispatch(newPage(page, headerImageSource))
};

export const updateHeaderImage = headerImageSource => dispatch => {
	dispatch(newHeaderImage(headerImageSource))
}


