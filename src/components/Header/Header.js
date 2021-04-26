import React, { useContext } from 'react';
import './Header.css';
import Logo from "../../Images/logo2.png"
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import cartLogo from '../../Images/ICON/Path 1.png'
import { CartContext } from '../../App';



const Header = () => {

    const [cart]=useContext(CartContext);

    const totalFood=cart.reduce((sum,newItem)=>sum+newItem.count,0)

    return (
        <div className="parent">
            <div className="logo">
                <Link to="/home"><img src={Logo} alt="" /></Link>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li>
                            <Link to="/checkout">
                                <button className="cart-btn" variant="transparent m-0 p-0">
                                    <h6 className='m-0 p-0'>{totalFood}</h6>
                                    <img src={cartLogo} alt="" />
                                </button>
                            </Link>
                        </li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup"><button className="sign-up-btn">Sign up</button></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;