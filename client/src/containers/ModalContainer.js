import { connect } from 'react-redux';
import Modal from '../components/ModalComponent'



const mapState = (state, ownProps) => ({
	image:ownProps.image,
	name:ownProps.name,
	description:ownProps.description,
	isOpen:ownProps.isOpen,
	toggleModal:ownProps.toggleModal
})

const mapDispatch = (dispatch, ownProps) => ({

});

export default connect(mapState, mapDispatch)(Modal);
