import React, { useState } from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    const [showNav, setshowNav] = useState(false);

    const handelshowNav = () => {
        setshowNav(!showNav);
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">SpotiTube</div>
                <ul className={`navitems ${showNav}`}>
                    <li className="navitem" id="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navitem" id="explore">
                        <Link to="/Explore">Explore</Link>
                    </li>
                    <li className="navitem" id="library">
                    <Link to="/Library">Library</Link>
                    </li>
                </ul>
                <a className="hamburger" onClick={handelshowNav}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_ItQ0EbmKjcazMsa3Vn2_GS-h7arPNMABCYkIECa5qRp75guZQUpAM1gbqz4ODG8F_0&usqp=CAU" />
                </a>
                <a href="#" id="signin">
                    <button id="signinbtn">Sign in</button>
                </a>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
