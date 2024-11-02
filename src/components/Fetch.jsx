import PropTypes from 'prop-types'
import useSection from '../store/useSection';
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import BookCard from './BookCard';
import BookModal from './BookModal';
import useBookModal from '../store/useModal';

function Fetch(props) {
  const { setSection } = useSection();
  const { showModal, toggleModal } = useBookModal();

  const books = [
    {
      cover: "https://covers.openlibrary.org/b/isbn/9781611748864-L.jpg",
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      date: 1954,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
    {
      cover: "https://covers.openlibrary.org/b/isbn/0340951419-L.jpg",
      name: "Fishing Log",
      author: "Harold RIVERA",
      date: 2022,
      rating: 4.556962,
      subjects: [
        "The Lord of the Rings",
        "Fiction",
        "Ficción",
        "English Fantasy fiction",
        "Ficción fantástica inglesa",
      ],
      characters: [
        "Frodo Baggins",
        "Samwise Gamgee",
        "Meriadoc Brandybuck",
        "Peregrin Took",
        "Gandalf the Grey",
      ]
    },
  ]

  useEffect(() => {
    setSection(props.section);
  }, [props.section, setSection])

  return (
    <div className="fetch-container">
      <SearchBar />
      <div className="cards-container">
        {
          books.map((book, index) => (
            <BookCard 
              key={index}
              title={book.name}
              date={book.date}
              imgSrc={book.cover} 
              clickMethod={toggleModal}/>
          ))
        }
      </div>
      {showModal ? (
        <BookModal/>
      ) : <></>
      }
    </div>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;