import { UPDATE_DASHBOARD } from '../../constants/dashboardConstants'


const initialState = {
  dashboard:{}
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_DASHBOARD:
      newState.dashboard[action.element] = action.data;
    break;
    default:
      return state;
  }
  return newState;
};

