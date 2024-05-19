import React, { useState } from "react";
import "../styles/Searchbar.css";
import searchIcon from "../assets/search_icon.svg";


export const SearchBar = () => {
  return (<div>
    <nav className="navbar bg-body-tertiary">

    <div className="gr-container container-fluid">
    <button className="bg-button btn btn-outline-success">¿Cómo?</button>
    <button className="bg-button btn btn-outline-success">¿Cuándo?</button>
    <button className="bg-button btn btn-outline-success">¿Dónde?</button>
      <form className="bg-button d-flex" role="search">
        <img className="search" alt="Search" src={searchIcon} />
        <input className="bg-button form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="bg-button btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  </nav>
  </div>);
};
/*
export const SearchBar = () => {
  // Estado para el valor del campo de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar el cambio en el campo de entrada
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="box">
      <div className="search-bar">
        <button className="element-button-primary">
          <div className="div">¿Cómo?</div>
        </button>
        <button className="div-wrapper">
          <div className="div">¿Cuándo?</div>
        </button>
        <button className="button">
          <div className="div">¿Dónde?</div>
        </button>
        <div className="element-search-input">
        <img className="search" alt="Search" src={searchIcon} />
        <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="label"
          />
          
        </div>
      </div>
    </div>
  );
};
*/

export default SearchBar;
