import { UNCHECK_BOX } from '../../constants/fieldListConstants'


const initialState = {
  records: []
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case COLLECT_RECORDS:
      newState.records = action.records;
    break;
    default:
      return state;
  }
  return newState;
};

