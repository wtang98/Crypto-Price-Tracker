import React, { useState } from "react";
import './nav.scss'
import Logo from '../../assets/images/Screenshot 2021-11-03 at 11.32.23.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Squash as Hamburger } from 'hamburger-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    AOS.init();

    const [openMenu, setOpenMenu] = useState(false);

    const menuDropDown = () => {
        return (
            <div className = "dropDown d-flex justify-content-center align-items-center flex-column" data-aos="zoom-out-down-right">
                <li className = "dropDown__text">Prices</li>
                <li className = "dropDown__text">Learn</li>
                <li className = "dropDown__text">Exchanges</li>
                <li className = "dropDown__text">Settings</li>
            </div>
        )
    }

    return (
        <div className="nav d-flex align-items-center justify-content-between">
            <img src={Logo} alt="" className="nav__img"/>
            <h2 className="nav__header">The Crypto Files</h2>
            <div className="nav__burger ">
                <Hamburger direction="right"
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
