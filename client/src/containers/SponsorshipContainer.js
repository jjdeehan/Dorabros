import { connect } from 'react-redux';
import Sponsorship from '../components/SponsorshipComponent'
import { updateHeaderImage, updatePage } from '../actionCreators/navbarActionCreators'




const mapState = (state, ownProps) => ({

})

const mapDispatch = (dispatch, ownProps) => ({
	updateHeaderImage: imageSource => dispatch(updateHeaderImage(imageSource)),
	updatePage: (newPage, imageSource) => dispatch(updatePage(newPage, imageSource))
});

export default connect(mapState, mapDispatch)(Sponsorship);
