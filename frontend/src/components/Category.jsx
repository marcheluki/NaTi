import React from "react";
import "../styles/Category.css";

const Category = () => {
    return (
        <div className="box">
            <div className="wrapper">
                <div className="icon"><i id="left" className="fa-solid fa-angle-left"></i></div>
                    <ul className="tabs-box">
                        <li className="tab">Fechas</li>
                        <li className="tab">Cocina</li>
                        <li className="tab">Deporte</li>
                        <li className="tab">Arte</li>
                        <li className="tab">Academia</li>
                        <li className="tab">Lenguajes</li>
                        <li className="tab">Manualidades</li>
                        <li className="tab">Costura</li>
                        <li className="tab">Moda</li>
                        <li className="tab">Oficios</li>
                    </ul>
                    <div className="icon"><i id="right"className="fa-solid fa-angle-right"></i></div>
            </div>
        </div>
    );
};

export default Category;