import { connect } from 'react-redux';
import Dorabro from '../components/DorabroComponent'
import { updatePage } from '../ActionCreators/navbarActionCreators'



const mapState = (state, ownProps) => ({
	headerImage: state.navbarReducer.headerImageSource
})

const mapDispatch = (dispatch, ownProps) => ({
updatePage: (newPage, imageSource) => dispatch(updatePage(newPage, imageSource))
});

export default connect(mapState, mapDispatch)(Dorabro);
