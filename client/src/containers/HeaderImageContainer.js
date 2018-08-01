import { connect } from 'react-redux';
import HeaderImage from '../components/HeaderImageComponent'



const mapState = (state, ownProps) => ({
	imageSource: state.navbarReducer.headerImageSource
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(HeaderImage);
