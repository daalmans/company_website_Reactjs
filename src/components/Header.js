// import React, { Component } from 'react';
import React, { useState } from 'react'
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import SideBar from './SideBar';



const Header = () => {

    const [visible, setVisible] = useState(false)

    const showSideBar = () => {
        setVisible(!visible)
    }

    return (
        <Fade top delay={50}>
            
            <header className="header">
                <div className="wrapper wrapper--header">
                    <Link className="header__logo-link" to="/">
                        <div className="logo"><img className="image" src="/img/logo_dark.png" /></div>
                    </Link>
                    <Nav context="header" />
                    <div className="header__menu" onClick={showSideBar}></div>
                    <SideBar showSideBar={visible} />
                </div>
            </header>
        </Fade>
    );
}


export default Header;