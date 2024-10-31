import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useButton from "../store/store";

function Navbar() {
  const { setActive } = useButton();
  const defaultButtonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(defaultButtonRef.current)
  }, [setActive]);
  
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
              className="filter-btn" 
              ref={defaultButtonRef}
              onClick={(e)=>clickFilterButton(e, '/')}>
              Name
            </button>
            <button 
              className="filter-btn"
              onClick={(e)=>clickFilterButton(e, '/author')}>
              Author
            </button>
            <button 
              className="filter-btn"
              onClick={(e)=>clickFilterButton(e, '/subject')}>
              Subject
            </button>
        </nav>
    </>
  )
}

export default Navbar;