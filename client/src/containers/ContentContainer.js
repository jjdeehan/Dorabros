import { connect } from 'react-redux';
import Content from '../components/ContentComponent'



const mapState = (state, ownProps) => ({
	page:ownprops.section
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Content);
