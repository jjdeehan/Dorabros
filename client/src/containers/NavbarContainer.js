import { connect } from 'react-redux';
import NavbarComponent from '../components/NavbarComponent'
import { updatePage } from '../actionCreators/navbarActionCreators'


const mapState = (state, ownProps) => ({
	page:state.navbarReducer.page,
})

const mapDispatch = (dispatch) => ({
	changePage: (newPage, imageSource) => dispatch(updatePage(newPage, imageSource))
});

export default connect(mapState, mapDispatch)(NavbarComponent);
