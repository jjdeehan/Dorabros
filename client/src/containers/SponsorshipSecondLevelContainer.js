import { connect } from 'react-redux';
import SponsorshipSecondLevel from '../components/SponsorshipSecondLevelComponent'
import { updateHeaderImage } from '../actionCreators/navbarActionCreators'


const mapState = (state, ownProps) => ({

})

const mapDispatch = (dispatch, ownProps) => ({
	updateHeaderImage: imageSource => dispatch(updateHeaderImage(imageSource))
});

export default connect(mapState, mapDispatch)(SponsorshipSecondLevel);
