import React from 'react';
import '../styles/App.css';
import Home from './Home';
import ExperiencePage from './ExperiencePage';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience/:id" element={<ExperiencePage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
