import { connect } from 'react-redux';
import Dorabro from '../components/dorabroComponent'
import { updatePage } from '../actionCreators/navbarActionCreators'



const mapState = (state, ownProps) => ({
	headerImage: state.navbarReducer.headerImageSource
})

const mapDispatch = (dispatch, ownProps) => ({
updatePage: (newPage, imageSource) => dispatch(updatePage(newPage, imageSource))
});

export default connect(mapState, mapDispatch)(Dorabro);
