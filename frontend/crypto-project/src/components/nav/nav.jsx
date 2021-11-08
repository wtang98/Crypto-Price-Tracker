import React, { useState } from "react";
import './nav.scss'
import Logo from '../../assets/images/Screenshot 2021-11-03 at 11.32.23.png'
import { Squash as Hamburger } from 'hamburger-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Nav = () => {
    AOS.init();
    const [openMenu, setOpenMenu] = useState(false);
    const menuDropDown = () => {
        return (
            <div className = "dropDown d-flex justify-content-center align-items-center flex-column" data-aos="zoom-out-down-right">
                <Link to="/prices" style={{ textDecoration: 'none'}}>
                <li className = "dropDown__text">Prices</li>
                </Link>
                <hr />
                <li className = "dropDown__text">Learn</li>
                <hr />
                <li className = "dropDown__text">Exchanges</li>
                <hr />
                <li className = "dropDown__text">Settings</li>
            </div>
        )
    }
    return (
        <div className="nav d-flex align-items-center">
            <Link to="/">
            <img src={Logo} alt="" className=" col-2 nav__img"/></Link>
            <h2 className=" col-9 px-2 nav__header">The Crypto Files</h2>
            <div className="col-1 nav__burger ">
                <Hamburger
                onToggle={toggled => {
                        if (toggled) {
                            setOpenMenu(true)
                        } else {
                            setOpenMenu(false)
                        }
                    }} />
            </div>
            {openMenu && menuDropDown()}
        </div>
    )
}


export default Nav