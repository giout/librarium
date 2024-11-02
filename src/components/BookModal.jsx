import PropTypes from 'prop-types'
import useBookModal from '../store/useModal';

function BookModal() {
    const { showModal, toggleModal } = useBookModal();

    return (
        showModal ? (
            <div className="modal-overlay">
                <div className="modal">
                    <button 
                        className="cancel-modal" 
                        onClick={() => toggleModal()}>
                            X
                    </button>
                </div>
            </div>
        ) : <></>
    );
}

BookModal.propTypes = {
    showModal: PropTypes.bool
  };

export default BookModal;
