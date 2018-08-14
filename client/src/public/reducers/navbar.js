import { UPDATE_PAGE, OVERVIEW_CONST, HOMEPAGE_CONST } from '../../constants/navbarConstants'
import lads from '../../images/Lads.png'

const initialState = {
  view: HOMEPAGE_CONST,
  headerImageSource:lads
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_PAGE:
      newState.view = action.view;
      newState.headerImageSource = action.headerImageSource;
    break;
    default:
      return state;
  }
  return newState;
};
