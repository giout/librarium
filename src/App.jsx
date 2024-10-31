import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Fetch from "./components/Fetch";

function App() {
  return (
    <>
      <Router>
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
      </Router>
    </>
  )
}

export default App;
