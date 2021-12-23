import React, { useState } from "react";
import './nav.scss'
import Logo from '../../assets/images/Screenshot 2021-11-03 at 11.32.23.png'
import { Squash as Hamburger } from 'hamburger-react'
import { Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../jses/firebase";
import { useStateValue } from "../../jses/stateprovider";

const Nav = (props) => {
    AOS.init();
    const {prices, exchange, home, login} = props
    const [isOpen, setOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    const name = user?.email.split("@");

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

    const menuDropDown = () => {
        return (
            <div className = "dropDown d-flex justify-content-center align-items-center flex-column" data-aos="zoom-out-down-right">
                {!home && <><li onClick={()=>navigate('/')} className = "dropDown__text">Home</li>
                <hr /></>}
                {!prices && <><li onClick={()=>navigate('/prices')} className = "dropDown__text">Prices</li>
                <hr /></>}
                <li className = "dropDown__text">Learn</li>
                <hr />
                <li className = "dropDown__text">Exchanges</li>
                <hr />
                <li className = "dropDown__text">Settings</li>
            </div>
        )
    }
    return (
        <div className="nav d-flex align-items-center justify-content-between">
            <Link to="/" className="d-flex" style={{ textDecoration: 'none' }}>
                <img src={Logo} alt="" className="nav__img"/>
                <h2 className="px-2 nav__header">The Crypto Files</h2>
            </Link>
            <div className="nav__burger ">
                {user && <Button className='sign' onClick={e=> !user ? navigate('/login'): handleAuth()}>
                    <span>{user && `Hello ${name[0]}`}</span>
                </Button>}
                {!user && <Button onClick={e=> !user ? navigate('/login'): handleAuth()}>
                    <span>{"Sign In"}</span>
                </Button>}
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            {isOpen && menuDropDown()}
        </div>
    )
}

export default Nav
