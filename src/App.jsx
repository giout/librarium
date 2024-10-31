import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Name from "./components/Name";
import Subject from "./components/Subject";
import Author from "./components/Author";

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/name" />} />
            <Route path="/name" element={<Name />}/>
            <Route path="/author" element={<Author />}/>
            <Route path="/subject" element={<Subject />}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App;
