import PropTypes from 'prop-types'
import useSection from '../store/useSection';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import useModal from '../store/useModal';
import useLoading from '../store/useLoading';
import Loader from './Loader';

function Fetch(props) {
  const { setSection } = useSection();
  const { toggleModal } = useModal();
  const [ selectedCard, setSelectedCard ] = useState({});
  const data  = [
    {
      name: 'Gladiator',
      cover: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      language: 'en',
      date: '2000-05-04',
      rating: 8.2,
      overview: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences."
    }
  ]
  const { loading } = useLoading();

  const handleCardClick = (book) => {
    setSelectedCard(book);
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
                  data.map((entry, index) => (
                    <Card 
                      key={index}
                      title={entry.name}
                      date={entry.date}
                      imgSrc={entry.cover} 
                      clickMethod={() => handleCardClick(entry)}/>
                  ))
                }
            </>
          )
        }
      </div>
      <Modal
        title={selectedCard.name}
        rating={selectedCard.rating}
        date={selectedCard.date} 
        language={selectedCard.language}
        overview={selectedCard.overview}/>
    </div>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;