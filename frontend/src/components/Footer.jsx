import React from "react";
import "../styles/Footer.css";
import banner from '../assets/NaTi.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';

export const Footer = () => {
    return (
        <div className="element-footer">
            <div className="social-icons">
                <div className="buttons-icon">
                    <div className="icon">
                        <img className="img" alt="Icon" src={facebook} />
                    </div>
                </div>
                <div className="buttons-icon">
                    <div className="icon">
                        <img className="icon-2" alt="Icon" src={instagram} />
                    </div>
                </div>
                <div className="buttons-icon">
                    <div className="icon">
                        <img className="icon-3" alt="Icon" src={youtube} />
                    </div>
                </div>
                <div className="buttons-icon">
                    <div className="icon">
                        <img className="img" alt="Icon" src={linkedin} />
                    </div>
                </div>
            </div>
            <img className="divider" alt="Divider" src="divider.svg" />
            <div className="overlap-group">
                <img className="phonto-removebg" alt="Phonto removebg" src={banner} />
                <p className="text-wrapper mt-3 mb-0 pb-0">© 2024 All rights reserved.</p>
            </div>
        </div>
    );
};



export default Footer;