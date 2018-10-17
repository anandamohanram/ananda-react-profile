import React from 'react'
import './SideDrawer.css'
import { NavLink } from 'react-router-dom';

const sideDrawer = (props) => {
    let classes;
    if (props.show){
        classes = "sideDrawer show"
    }
    else{
        classes = "sideDrawer"
    }
    return(
        <nav className={classes}>
                <ul>
                    <li><NavLink to="/aboutme" onClick={props.clicked}>About Me</NavLink></li>
                    <li><NavLink to="/contact" onClick={props.clicked}>Contact</NavLink></li>
                    <li><NavLink to="/resume" onClick={props.clicked}>Resume</NavLink></li>
                    <li><NavLink to="/portfolio" onClick={props.clicked}>Portfolio</NavLink></li>
                </ul>
        </nav>
    );
}

export default sideDrawer;
