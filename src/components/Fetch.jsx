import PropTypes from 'prop-types'
import useSection from '../store/useSection';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import BookModal from './BookModal';
import useBookModal from '../store/useBookModal';
import useLoading from '../store/useLoading';
import Loader from './Loader';

function Fetch(props) {
  const { setSection } = useSection();
  const { toggleModal } = useBookModal();
  const [ selectedBook, setSelectedBook ] = useState({});
  const books  = [
    {
      title: 'The babadook',
      cover: '...',
      language: 'en',
      date: '2000-05-04',
      rating: 5,
      overview: '...'
    }
  ]
  const { loading } = useLoading();

  const handleCardClick = (book) => {
    setSelectedBook(book);
    toggleModal();
  }

  useEffect(() => {
    setSection(props.section);
  }, [props.section, setSection]);

  return (
    <div className="fetch-container">
      <SearchBar />
      <div className="cards-container">
        {
          loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <>
                {
                  books.map((book, index) => (
                    <BookCard 
                      key={index}
                      title={book.name}
                      date={book.date}
                      imgSrc={book.cover} 
                      clickMethod={() => handleCardClick(book)}/>
                  ))
                }
            </>
          )
        }
      </div>
      <BookModal
        title={selectedBook.name}
        author={selectedBook.author}
        rating={selectedBook.rating}
        date={selectedBook.date}
        subjects={selectedBook.subjects}
        characters={selectedBook.characters} />
    </div>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;