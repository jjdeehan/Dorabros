import { connect } from 'react-redux';
import Progress from '../components/ProgressComponent'
import { checkProgress } from '../actionCreators/progressActionCreators'



const mapState = (state, ownProps) => ({

})

const mapDispatch = (dispatch, ownProps) => ({
	checkProgress: () => checkProgress(dispatch),
	updatePage: page => updatePage(dispatch, page)
});

export default connect(mapState, mapDispatch)(Progress);
