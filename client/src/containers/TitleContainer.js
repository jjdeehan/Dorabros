import { connect } from 'react-redux';
import Title from '../components/TitleComponent'



const mapState = (state, ownProps) => ({
	title:ownProps.title
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Title);
