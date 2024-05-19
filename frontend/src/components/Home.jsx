import React from 'react';
import Navbar from './Navbar.jsx';
import '../styles/Home.css';
import Category from './Category.jsx'; 
import SearchBar from './Searchbar.jsx';
import HappyImage from './HappyImage.jsx';
import Container from './Container.jsx';

const Home = () => {
    return (
      <div>
        
        <SearchBar />
        <HappyImage />
        <Category />
        <Container />
      </div>
    );
}

export default Home;