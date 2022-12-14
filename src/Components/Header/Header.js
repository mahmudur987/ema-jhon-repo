
import './Header.css'
import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div>
            <nav className='header-nav'>
                <h2>{user?.email}</h2>

                <img src={logo} alt="" />

                <div>
                    <Link to="/order">Order</Link>
                    <Link to="/">Shop</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>

                    {
                        user ? <Link onClick={logout}> Logout</Link>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">SignUp</Link>
                            </>
                    }

                </div>


            </nav>





        </div>
    );
};

export default Header;