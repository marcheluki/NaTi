import React from "react";
import "../styles/Navbar.css";
import banner from "../assets/NaTi.png";
import dkfjhaldjlas from "../assets/dkfjhaldjlas-1.png";
import location from "../assets/location_icon.png";

export const Navbar = () => {
    return (
        <div className="element-header-navigation">
            <div className="items">
                <div className="button">
                    <img className="image" alt="Image" src={location} />
                </div>
                <div className="dkfjhaldjlas-wrapper">
                    <img className="dkfjhaldjlas" alt="Dkfjhaldjlas" src={dkfjhaldjlas} />
                </div>
                <div className="element-profile-avatar">
                    <div className="graphic" />
                </div>
            </div>
            <img className="phonto-removebg" alt="Phonto removebg" src={banner} />
        </div>
    );
};


export default Navbar;