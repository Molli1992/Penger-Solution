import React from "react";
import "./Header.css";



function NavBar(props) {

    const onClick = (e) => {

        const DropDownMenu = document.querySelector(".dropdown_menu");

        DropDownMenu.classList.toggle("open")

        const isOpen = DropDownMenu.classList.contains("open")

    };



    return (

        <header>

            <br></br>

            <div className="navbar">

                <div className="logo"><a href="/">Lumina Crystal</a></div>

                <ul className="links">

                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about-1">Freight Payment Providers</a></li>

                </ul>

                <a href="/" className="action_btn">Home</a>

                <button className="toggle_btn" onClick={onClick}><ion-icon name="reorder-four-outline" size="large">
                </ion-icon></button>

                <div className="dropdown_menu">

                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about-1">Freight Payment</a></li>
                    <li><a href="/" className="action_btn_responsive">Home</a></li>

                </div>

            </div>

        </header>

    )

};

export default NavBar;


