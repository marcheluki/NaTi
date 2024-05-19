import React, { useState } from "react";
import "../styles/Searchbar.css";
import searchIcon from "../assets/search_icon.svg";

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

export default SearchBar;
