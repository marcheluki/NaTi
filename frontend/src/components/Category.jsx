import React from "react";
import "../styles/Category.css";

const Category = () => {
    <script src="scripti.js" defer></script>
    return (
        <div className="box">
            <div className="wrapper">

                <div className="icon"><i id="left" className="fa-solid fa-angle-left"></i></div>

                    <ul className="tabs-box">
                        <li className="tab">Coding</li>
                        <li className="tab active">JavaScript</li>
                        <li className="tab">Podcasts</li>
                        <li className="tab">Databases</li>
                        <li className="tab">Web Development</li>
                        <li className="tab">Unboxing</li>
                        <li className="tab">History</li>
                        <li className="tab">Programming</li>
                        <li className="tab">Gadgets</li>
                        <li className="tab">Algorithms</li>
                        <li className="tab">Comedy</li>
                        <li className="tab">Gaming</li>
                        <li className="tab">Share Market</li>
                        <li className="tab">Smartphones</li>
                        <li className="tab">Data Structure</li>
                    </ul>
                    <div className="icon"><i id="right"className="fa-solid fa-angle-right"></i></div>
            </div>
        </div>
    );
};

export default Category;