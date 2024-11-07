import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useButton from "../store/useButton";
import useSection from "../store/useSection";
import useAPI from '../store/useAPI';

function Navbar() {
  const { setActive } = useButton();
  const filmsRef = useRef(null);
  const tvRef = useRef(null);
  const navigate = useNavigate();
  const { setSection, section } = useSection();
  const { clean } = useAPI();

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
    clean();
    navigate(route);
  }

  return (
    <>
        <nav className="navbar1">
          <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-film film-icon" viewBox="0 0 16 16">
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
          </svg>
          <span className="white-text title">Memorabilia</span>
        </nav>
        <nav className="navbar2">
            <button 
              className="filter-btn not-active-btn" 
              ref={filmsRef}
              onClick={(e)=>clickFilterButton(e, '/films')}
              disabled={section == 'films'}>
              Films
            </button>
            <button 
              className="filter-btn not-active-btn"
              ref={tvRef}
              onClick={(e)=>clickFilterButton(e, '/tv')}
              disabled={section == 'tv'}>
              TV
            </button>
        </nav>
    </>
  )
}

export default Navbar;