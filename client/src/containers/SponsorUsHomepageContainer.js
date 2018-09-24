import { connect } from 'react-redux';
import SponsorUsHomepage from '../components/SponsorUsHomePageComponent'
import { checkProgress } from '../actionCreators/progressActionCreators'
import { updatePage } from '../actionCreators/navbarActionCreators'


const mapState = (state, ownProps) => ({
	progress:state.progressReducer.progress
})

const mapDispatch = (dispatch, ownProps) => ({
	checkProgress: () => dispatch(checkProgress()),
	updatePage: page => dispatch(updatePage(page))
});

export default connect(mapState, mapDispatch)(SponsorUsHomepage);
