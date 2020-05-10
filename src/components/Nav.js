import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );
    
    return (
        <div className={`main-nav main-nav--${context}`}>   
            <NavLink className={getClassName("/oferta")} exact to="/oferta">Oferta</NavLink> 
            <NavLink className={getClassName("/about")} exact to="/about">O nas</NavLink> 
            <NavLink className={getClassName("/cennik")} exact to="/cennik">Cennik</NavLink>                        
            <NavLink className={getClassName("/kontakt")} exact to="/kontakt">Kontakt</NavLink>                       
        </div>
    );

    
};

export default withRouter(Nav);