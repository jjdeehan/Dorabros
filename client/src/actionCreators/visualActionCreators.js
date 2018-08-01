import { ERROR_CODE, ERROR_META, UPDATE_ERROR_CODE_EXAMPLES, UPDATE_COLUMNS } from '../constants/visualConstants'
import { getErrorMeta } from '../utils/FileSystemUtils'
import React from 'react'
import axios from 'axios'


export const updateErrorBubble = (errorObject) => ({
  errorObject,
  type: ERROR_CODE
});

export const updateExamples = (errorCode, examples) => ({
	errorCode,
	examples,
	type: UPDATE_ERROR_CODE_EXAMPLES
})

export const updateColumns = (columns, checkedFields) => ({
	columns,
	checkedFields,
	type: UPDATE_COLUMNS
})

export const setErrorMeta = errorMeta => ({
	errorMeta,
	type: ERROR_META
})

export const setErrorCodeFirst = errorObject => dispatch => {
	dispatch(updateErrorBubble(errorObject))
	axios.get('/api/records/retrieve/'.concat(errorObject.INCIDENT_CODE))
	.then(results => {
		const columns = results.data.columns.map(el => (
		{
			Header:el,
			accessor:el,
		})
		)
		dispatch(updateExamples(errorObject.INCIDENT_CODE, results.data.results))

		const checkedFields = {}
		for( let i = 0; i<columns.length; i++){
			checkedFields[columns[i].Header] = true;
		}
		dispatch(updateColumns(columns, checkedFields))
		})
}

export const setErrorCode = errorObject => dispatch => {

	// placeholder for field sorting logic function
	const defineHierarchy = (fields) => {
		return fields.sort()
	}

	
	axios.get('/api/records/retrieve/'.concat(errorObject.INCIDENT_CODE))
	.then(results => {
		dispatch(updateExamples(errorObject.INCIDENT_CODE, results.data.results))
		dispatch(updateErrorBubble(errorObject))
	})
}

export const setErrorCodeEncore = errorObject => dispatch => {
	dispatch(updateErrorBubble(errorObject))
}

export const errorMeta = () => (dispatch) => {
	axios.get('/api/records/retrieve').then((records) => {
		const final = records.data.pop()
		const metaData = records.data.sort((a,b) => b.Total - a.Total)
		dispatch(setErrorMeta(metaData))
	})
}
