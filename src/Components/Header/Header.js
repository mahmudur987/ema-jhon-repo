
import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="/order">Order</a>
                    <a href="/Shop">Shop</a>
                    <a href="/inventory"> inventory </a>
                    <a href="/About"> About</a>
                </div>


            </nav>





        </div>
    );
};

export default Header;