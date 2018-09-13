 /* Dependencies */
import { combineReducers } from 'redux';

/* Import Other Reducers */
import dummyReducer from './dummy';
import navbarReducer from './navbar'
import dashboardReducer from './dashboard'
import progressReducer from './progress'


/* Combine & Export Reducers to Store */
export default combineReducers({
  dummyReducer,
  navbarReducer,
  dashboardReducer,
  progressReducer
});
