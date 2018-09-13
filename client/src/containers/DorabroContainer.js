import { connect } from 'react-redux';
import Dorabro from '../components/DorabroComponent'



const mapState = (state, ownProps) => ({
	headerImage: state.navbarReducer.headerImageSource
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Dorabro);
