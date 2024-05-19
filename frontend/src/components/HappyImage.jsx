import React from "react";
import "../styles/HappyImage.css";
import letter from "../assets/lo_mas_popular.png";
import paradise from "../assets/paraiso.png";

const HappyImage = () => {
    return (
        <div>
            <img className='image' src={letter} alt="letter" />
            <img className='image-paradise' src={paradise} alt="paradise" />
        </div>
    );
};

export default HappyImage;