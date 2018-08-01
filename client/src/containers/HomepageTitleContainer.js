import { connect } from 'react-redux';
import HomepageTitle from '../components/HomepageTitleComponent'



const mapState = (state, ownProps) => ({
	title:ownProps.title
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(HomepageTitle);
