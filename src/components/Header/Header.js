import React from 'react';
import './Header.css';
import Logo from "../../Images/logo2.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="parent">
            <div className="logo">
                <Link to="/home"><img src={Logo} alt=""/></Link>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup"><button>Sign up</button></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;