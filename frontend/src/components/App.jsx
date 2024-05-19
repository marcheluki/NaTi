import React from 'react';
import '../styles/App.css';
import Home from './Home';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
