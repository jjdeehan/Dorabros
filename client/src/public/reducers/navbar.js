import { UPDATE_PAGE, OVERVIEW_CONST, HOMEPAGE_CONST } from '../../constants/navbarConstants'


const initialState = {
  view: HOMEPAGE_CONST,
  headerImageSource:"https://preview.ibb.co/f2LuLe/Screen_Shot_2018_07_12_at_14_47_21.png"
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
