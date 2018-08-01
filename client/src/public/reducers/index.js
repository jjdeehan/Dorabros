 /* Dependencies */
import { combineReducers } from 'redux';

/* Import Other Reducers */
import dummyReducer from './dummy';
import navbarReducer from './navbar'
import dashboardReducer from './dashboard'


/* Combine & Export Reducers to Store */
export default combineReducers({
  dummyReducer,
  navbarReducer,
  dashboardReducer,
});
