import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useButton from "../store/useButton";
import useSection from "../store/useSection";

function Navbar() {
  const { setActive } = useButton();
  const nameRef = useRef(null);
  const authorRef = useRef(null);
  const navigate = useNavigate();
  const { setSection, section } = useSection()

  useEffect(() => {
    // filter button will be activated according to the current section
    switch(section.toLowerCase()){
      case 'name':
        setActive(nameRef.current);
        break;
      case 'author':
        setActive(authorRef.current);
        break;
      default:
        setSection('name')
    }
  }, [setActive, section, setSection]);
  
  const clickFilterButton = (e, route) => {
    setActive(e.target);
    navigate(route);
  }

  return (
    <>
        <nav className="navbar1">
            <img className="book-icon" src="src/assets/book.svg" alt="" />
            <span className="white-text title">Librarium</span>
        </nav>
        <nav className="navbar2">
            <button 
              className="filter-btn not-active-btn" 
              ref={nameRef}
              onClick={(e)=>clickFilterButton(e, '/name')}>
              Name
            </button>
            <button 
              className="filter-btn not-active-btn"
              ref={authorRef}
              onClick={(e)=>clickFilterButton(e, '/author')}>
              Author
            </button>
        </nav>
    </>
  )
}

export default Navbar;