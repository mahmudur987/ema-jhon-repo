
import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/order">Order</Link>
                    <Link to="/">Shop</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>


                </div>


            </nav>





        </div>
    );
};

export default Header;