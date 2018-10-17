import React from 'react';
import './HamburgerButton.css'

const hamButton = (props) => {
    return(
    <button className="hamButton" onClick={props.clicked}> 
        <div className="hamButton__line"></div>
        <div className="hamButton__line"></div>
        <div className="hamButton__line"></div>
    </button>
    );
}

export default hamButton;