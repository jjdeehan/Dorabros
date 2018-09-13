import { UPDATE_PROGRESS } from '../../constants/progressConstants'


const initialState = {
	progress:0
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_PROGRESS:
      newState.progress = action.progress
    break;
    default:
      return state;
  }
  return newState;
};
