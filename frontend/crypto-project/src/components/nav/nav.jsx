import React, { useState } from "react";
import './nav.scss'
import Logo from '../../assets/images/Screenshot 2021-11-03 at 11.32.23.png'
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOpen = () => {    
        setOpenMenu(!openMenu)
    }

    const menuDropDown = () => {
        return (
            <div>
                <ul>
                    <li>Prices</li>
                    <li>Learn</li>
                    <li>Exchanges</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }

    return (
        <div className="nav d-flex align-items-center">
            <div className="col-2">
                <img src={Logo} alt="" className="nav__img"/>
            </div>
            <div className="col-9">
                <h2 className="nav__header">The Crypto Files</h2>
            </div>
            <div className="col-1">
                {<div onClick={menuOpen} className="nav__icon d-flex align-items-center"><GiHamburgerMenu/></div>}
            </div>
                {openMenu && menuDropDown()}
        </div>
    )
}

export default Nav
