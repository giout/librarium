import PropTypes from 'prop-types'
import useModal from '../store/useModal';

function Modal(props) {
    const { showModal, toggleModal } = useModal();

    return (
        showModal ? (
            <div className="modal-overlay">
                <div className="modal">
                    <button 
                        className="cancel-modal" 
                        onClick={() => toggleModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-x cancel-icon" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <div className="modal-content">
                        <span className="modal-title modal-wrap-text">{props.title}</span>
                        <hr className="modal-line"/>
                        <div className="modal-icon-text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar modal-icon first-color-icon" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                            <span className="modal-text">Release date: {props.date}</span>
                        </div>
                        <div className="modal-icon-text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill modal-icon orange-icon" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span className="modal-text">TMDB rating: {props.rating}</span>
                        </div>
                        <div className="modal-icon-text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate modal-icon first-color-icon" viewBox="0 0 16 16">
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                            </svg>
                            <span className="modal-text">Original language: {props.language}</span>
                        </div>
                        <hr className="modal-line"/>
                        <span className="modal-text modal-wrap-text">{props.overview}</span>
                    </div>
                </div>
            </div>
        ) : <></>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
    language: PropTypes.string,
    overview: PropTypes.string
};

export default Modal;
