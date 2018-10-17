import React from 'react'
import './Navbar.css'
import HamburgerButton from '../SideDrawer/HamburgerButton'
import { NavLink } from 'react-router-dom';
//{ Route, NavLink, Switch, Redirect }

const navbar = (props) => {
    return(
    <header className="navbar">
        <nav className="navbar__navigation">
            <div className="hamburgerButton"><HamburgerButton clicked = {props.hamBurgerClicked}/></div>
            
            <NavLink to="/" className="navbar__logo">
                    <img src={props.logo} alt="am" />
                    <div>{props.title} </div> 
            </ NavLink>    
            
            <div className="navbar__navigation-items">
                <ul>
                    <li><NavLink to="/aboutme">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
    );
} 

export default navbar;