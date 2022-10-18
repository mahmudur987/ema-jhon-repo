import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='from-title'>please log in</h1>

            <form className='form'>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required placeholder='password' />
                </div>

                <button className='btn-submit' type="submit">Submit</button>
            </form>
            <p>New to Ema-jhon <Link to={'/signup'}> Create a new account</Link> </p>





        </div>
    );
};

export default Login;