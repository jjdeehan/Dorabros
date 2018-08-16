import { connect } from 'react-redux';
import Person from '../components/PersonComponent'



const mapState = (state, ownProps) => ({
	person:ownProps.person,
	imageSource:ownProps.person.imageSource[0]
})

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(Person);
