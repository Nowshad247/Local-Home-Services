import logo from '../../logo.svg'
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h1>Local Home Services </h1>
                    <p>Local Home Service</p>
                </div>
            </div>
            <div className="title">
                <h1>Total Budget : 100 Million</h1>
            </div>
        </div>
    );
};

export default Header;