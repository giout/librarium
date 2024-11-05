import PropTypes from 'prop-types'
import useSection from '../store/useSection';
import SearchBar from './SearchBar';
import { useEffect, useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import useModal from '../store/useModal';
import useLoading from '../store/useLoading';
import Loader from './Loader';
import useAPI from '../store/useAPI';

function Fetch(props) {
  const { setSection } = useSection();
  const { toggleModal } = useModal();
  const [ selectedCard, setSelectedCard ] = useState({});
  const { data, results } = useAPI();
  const { loading } = useLoading();

  const handleCardClick = (entry) => {
    setSelectedCard(entry);
    toggleModal();
  }

  useEffect(() => {
    setSection(props.section);
  }, [props.section, setSection]);

  return (
    <div className="fetch-container">
      <SearchBar />
      <span className="results">{results == 0 ? '' : results +  ' results...'}</span>
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