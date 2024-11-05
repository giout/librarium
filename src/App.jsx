import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Fetch from "./components/Fetch";

function App() {
  return (
    <>
      <Router>
        <div className="page-container">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/films"/>} />
              <Route path="/films" element={<Fetch section="films"/>}/>
              <Route path="/tv" element={<Fetch section="tv"/>}/>
            </Routes>
          </main>
          <footer>
            <span>Giovanni Urdaneta - 2024</span>
            <span>Data provided by <strong><a href="https://developer.themoviedb.org/reference/intro/getting-started" target="_blank">The Movie Database</a></strong></span>
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App;
