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
              <Route path="/" element={<Navigate to="/name"/>} />
              <Route path="/name" element={<Fetch section="Name"/>}/>
              <Route path="/author" element={<Fetch section="Author"/>}/>
              <Route path="/subject" element={<Fetch section="Subject"/>}/>
            </Routes>
          </main>
          <footer>
            <span>Giovanni Urdaneta - 2024</span>
            <span>Data provided by <strong><a href="https://openlibrary.org/developers/api" target="_blank">OpenLibrary API</a></strong></span>
          </footer>
        </div>
      </Router>
    </>
  )
}

export default App;
