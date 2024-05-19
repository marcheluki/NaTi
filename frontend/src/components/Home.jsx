import React from 'react';
import Navbar from './Navbar.jsx';
import '../styles/Home.css';
import Category from './Category.jsx'; 
import SearchBar from './Searchbar.jsx';

const Home = () => {
    return (
      <div>
        
        <Navbar />
        <SearchBar />
        
        <h1 className='container-t'>Welcome to the Home Page</h1>

      </div>
    );
}

export default Home;