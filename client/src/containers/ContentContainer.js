import { connect } from 'react-redux';
import Content from '../components/ContentComponent'



const mapState = (state, ownProps) => ({
	page:state.navbarReducer.view
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Content);
