import PropTypes from 'prop-types';
import useSection from '../store/useSection';
import { useEffect, useState, useCallback } from 'react';
import Card from './Card';
import Modal from './Modal';
import useModal from '../store/useModal';
import useLoading from '../store/useLoading';
import Loader from './Loader';
import useAPI from '../store/useAPI';
import useSearchInput from '../store/useSearchInput';

function Fetch(props) {
  const { section, setSection } = useSection();
  const { toggleModal } = useModal();
  const [ selectedCard, setSelectedCard ] = useState({});
  const { data, results, searchData, clean } = useAPI();
  const { searchLoading, scrollLoading, setSearchLoading, setScrollLoading } = useLoading();
  const { searchInput } = useSearchInput();
  const searchDelayMs = 50;

  const handleCardClick = (entry) => {
    setSelectedCard(entry);
    toggleModal();
  }

  const handleScroll = useCallback(() => {
    // if scroll to the bottom is made and the amount of entries are less than all results
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.scrollHeight && data.length < results  
    ) {
      setScrollLoading(true);
      // fetch data with the input that was set on initial search
      setTimeout(async () => {
        await searchData(section, searchInput);
        setScrollLoading(false);
      }, searchDelayMs);
    }
  }, [searchData, searchInput, section, setScrollLoading, data, results ]);

  useEffect(() => {
    setSection(props.section);
  }, [props.section, setSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // when search input or section change, fetch data
  useEffect(() => {
      // use useAPI hook clean method to restart pagination
      clean();
      setSearchLoading(true);
      // store input current value to use it when fetching data on scrolling
      setTimeout(async () => {
        await searchData(section, searchInput);
        setSearchLoading(false);
      }, searchDelayMs);
  }, [clean, searchData, setSearchLoading, searchInput, section]);

  return (
    <div className="fetch-container">
      <span className="results">{results == 0 ? '' : results +  ' results...'}</span>
      <div className="cards-container">
        {
          /* loader to search for new content */
          searchLoading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <>
                {
                  data.length > 0 ? (
                    data.map((entry, index) => (
                      <Card 
                        key={index}
                        title={entry.name}
                        date={entry.date}
                        imgSrc={entry.cover} 
                        clickMethod={() => handleCardClick(entry)}/>
                    ))
                  ) : (
                    <span className="results">No results were found...</span>
                  )
                }
            </>
          )
        }
      </div>
      {
        /* loader to scroll */
        scrollLoading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          <></>
        )
      }
      <Modal
        title={selectedCard.name}
        rating={selectedCard.rating}
        date={selectedCard.date} 
        language={selectedCard.language}
        overview={selectedCard.overview}/>
      <div className="margin-div"/>
    </div>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;