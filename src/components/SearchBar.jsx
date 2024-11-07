import PropTypes from 'prop-types';
import useSection from "../store/useSection";
import useSearchInput from '../store/useSearchInput';

function SearchBar(props) {
    const { section } = useSection();
    const { setSearchInput } = useSearchInput();

    const handleInput = (e) => {
        props.onSearch(e.target.value);
        setSearchInput(e.target.value);
    }

    return (
    <div className="search-bar">
        <input className="search-input" type="text" placeholder={`Search for ${section}...`} onChange={(e) => handleInput(e)}/>
        <button 
            className="search-button" 
            disabled={true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        </button>
    </div>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func
};

export default SearchBar;