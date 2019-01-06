import { connect } from 'react-redux';
import Person from '../components/PersonLargeComponent'



const mapState = (state, ownProps) => ({
	person:ownProps.person,
	imageSource:ownProps.person.imageSource[0],
	hovered:ownProps.hovered,
	clicked:ownProps.clicked
})

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(Person);
