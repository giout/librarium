import PropTypes from 'prop-types'
import useSection from '../store/useSection';
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import BookCard from './BookCard';

function Fetch(props) {
  const { setSection } = useSection();

  useEffect(() => {
    setSection(props.section);
  }, [props.section, setSection])

  return (
    <div className="fetch-container">
      <SearchBar />
      <div className="cards-container">
        <BookCard />
      </div>
    </div>
  )
}

Fetch.propTypes = {
  section: PropTypes.string
};

export default Fetch;