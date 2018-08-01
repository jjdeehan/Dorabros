import { 
	UPDATE_DASHBOARD, 
	TRADING_VOLUMES_BY_DATE, 
	TRADE_SPREAD, 
	TRADE_DAY_OF_THE_WEEK,
	EXECUTION_MAKERS_BY_FREQ,
	INSTRUMENT_CLASSIFICATION_ANALYSIS,
	INSTRUMENTS_TRADED_BY_FREQ, 
	UNDERLYING_INSTRUMENTS_TRADED_BY_FREQ 
	} from '../constants/dashboardConstants'
import React from 'react'
import axios from 'axios'


export const update = {
	tradeSpread: (tradeSpread) => ({
		element:TRADE_SPREAD,
		data:tradeSpread,
		type:UPDATE_DASHBOARD
	}),
	tradingVolumesByDate: (tradingVolumesByDate) => ({
		element:TRADING_VOLUMES_BY_DATE,
		data:tradingVolumesByDate,
		type:UPDATE_DASHBOARD
	}),
	tradeDayOfTheWeek: (tradeDayOfTheWeek) => ({
		element:TRADE_DAY_OF_THE_WEEK,
		data:tradeDayOfTheWeek,
		type:UPDATE_DASHBOARD
	}),
	executionMakersByFreq: (executionMakersByFreq) => ({
		element:EXECUTION_MAKERS_BY_FREQ,
		data:executionMakersByFreq,
		type:UPDATE_DASHBOARD
	}),
	instrumentClassificationAnalysis: (instrumentClassificationAnalysis) => ({
		element:INSTRUMENT_CLASSIFICATION_ANALYSIS,
		data:instrumentClassificationAnalysis,
		type:UPDATE_DASHBOARD
	}),
	instrumentsTradedByFreq: (instrumentsTradedByFreq) => ({
		element:INSTRUMENTS_TRADED_BY_FREQ,
		data:instrumentsTradedByFreq,
		type:UPDATE_DASHBOARD
	}),
	underlyingInstrumentsTradedByFreq: (underlyingInstrumentsTradedByFreq) => ({
		element:UNDERLYING_INSTRUMENTS_TRADED_BY_FREQ,
		data:underlyingInstrumentsTradedByFreq,
		type:UPDATE_DASHBOARD
	}),
}

export const setElement = element => dispatch => {
	axios.get('/api/dashboard/'+element)
	.then(results => {
		dispatch(update[element](results.data))
		})
}
