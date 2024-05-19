import React from "react";
import "../styles/Navbar.css";
import banner from "../assets/NaTi.png";
import dkfjhaldjlas from "../assets/dkfjhaldjlas-1.png";
import location from "../assets/location_icon.png";

export const Navbar = () => {
    return (<div>
        <nav className="navbar bg-navbar">
        <div className="container-fluid">
            <a className="navbar-brand"><img src={banner}></img></a>
            <div className="d-flex" role="search">
            <button className="btn bg-buttons"><img className="spaces" src={location}></img></button>
            <button className="btn bg-buttons">Servicios</button>
            <img className="graphic" src="https://s3-alpha-sig.figma.com/img/ddaf/d214/680dadd2835dc69a669d8ce023421b1c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VBNvVBVa4w~UUGHyNPpJUYFSbSPAYRKaXn5GR4EitoDtVvs2-1wWYc2gBhkhtkbo9ZLZ24rPPTqQ7LsgGY~OPQIJdIube6K8fQUZASZ-Qg78FWR0uFdURAbWXZblpP7KDeB9U4TyxkyNdiVRe0d7VcsQ9mMAi9xFYVqihqCQH11vuKdg-wmCBD3awMwfEGDiLLru3PEFhEgjx9S~EtecWBH6M94E4Q1Q4Isr8jsv5m0f~GXuX70AKLUdNMLalgKmgSo3zcBXxftYI6~oczOU4W8yu0Ecr7uFd9kkCgnhMZtpGITkOpzH9Jf9UiVey3IsdzJ52tyl9olUNKrcav-9sw__"/>
            </div>
        </div>
        </nav>
    </div>);
};

/*
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
*/

export default Navbar;