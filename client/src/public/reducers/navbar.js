import { UPDATE_PAGE, OVERVIEW_CONST, HOMEPAGE_CONST, UPDATE_HEADER_IMAGE } from '../../constants/navbarConstants'
import lads from '../../images/Lads.jpg'

const initialState = {
  view: HOMEPAGE_CONST,
  headerImageSource:lads,
  refresh:true
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_PAGE:
      newState.view = action.view;
      newState.headerImageSource = action.headerImageSource;
      newState.refresh = true;
    break;
    case UPDATE_HEADER_IMAGE:
      newState.headerImageSource = action.headerImageSource;
      break;
    default:
      return state;
  }
  return newState;
};
