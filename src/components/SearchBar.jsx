import PropTypes from 'prop-types';
import useSection from "../store/useSection";
import { useState } from 'react';

function SearchBar(props) {
    const { section } = useSection();
    const [ input, setInput ] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
    <div className="search-bar">
        <input className="search-input" type="text" placeholder={`Search for ${section}...`} onChange={(e) => handleInput(e)}/>
        <button 
            className="search-button" 
            onClick={() => props.onSearch(input)} 
            disabled={!input}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
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