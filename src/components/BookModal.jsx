import PropTypes from 'prop-types'
import useBookModal from '../store/useModal';

function BookModal(props) {
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
                    <div className="modal-content">
                        <span className="modal-book-title">{props.title}</span>
                        <span className="modal-book-author">{props.author}</span>
                        <hr className="modal-line"/>
                        <div className="modal-icon-text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-text modal-icon brown-icon" viewBox="0 0 16 16">
                                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                            </svg>
                            <span className="modal-text">Publish date: {props.date}</span>
                        </div>
                        <div className="modal-icon-text-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill modal-icon orange-icon" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <span className="modal-text">{props.rating} (OpenLibrary)</span>
                        </div>
                        {props.subjects && props.subjects.length ? (
                            <>
                                <div className="modal-icon-text-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots modal-icon brown-icon" viewBox="0 0 16 16">
                                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                    </svg>
                                    <span className="modal-text">Subjects:</span>
                                </div>
                                <div className="options-container">
                                    {
                                        props.subjects.map((subject, index) => (
                                            <div key={index} className="option">
                                                <span>{subject}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ) : (<></>)}
                        {props.characters && props.characters.length ? (
                            <>
                                <div className="modal-icon-text-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person modal-icon brown-icon" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                        <span className="modal-text">Key characters:</span>
                                </div>
                                <div className="options-container">
                                    {
                                        props.characters.map((character, index) => (
                                            <div key={index} className="option">
                                                <span>{character}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ) : (<></>)}
                    </div>
                </div>
            </div>
        ) : <></>
    );
}

BookModal.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.number,
    subjects: PropTypes.array,
    characters: PropTypes.array
};

export default BookModal;
