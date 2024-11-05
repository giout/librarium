import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useButton from "../store/useButton";
import useSection from "../store/useSection";

function Navbar() {
  const { setActive } = useButton();
  const filmsRef = useRef(null);
  const tvRef = useRef(null);
  const navigate = useNavigate();
  const { setSection, section } = useSection();

  useEffect(() => {
    // filter button will be activated according to the current section
    switch(section.toLowerCase()){
      case 'films':
        setActive(filmsRef.current);
        break;
      case 'tv':
        setActive(tvRef.current);
        break;
      default:
        setSection('films')
    }
  }, [setActive, section, setSection]);
  
  const clickFilterButton = (e, route) => {
    setActive(e.target);
    navigate(route);
  }

  return (
    <>
        <nav className="navbar1">
            <img className="book-icon" src="./public/book.svg" alt="" />
            <span className="white-text title">Librarium</span>
        </nav>
        <nav className="navbar2">
            <button 
              className="filter-btn not-active-btn" 
              ref={filmsRef}
              onClick={(e)=>clickFilterButton(e, '/films')}>
              Films
            </button>
            <button 
              className="filter-btn not-active-btn"
              ref={tvRef}
              onClick={(e)=>clickFilterButton(e, '/tv')}>
              TV
            </button>
        </nav>
    </>
  )
}

export default Navbar;