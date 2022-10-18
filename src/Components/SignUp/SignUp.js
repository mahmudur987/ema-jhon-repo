import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
            <h1>please signUp </h1>
            <form className='form'>

                <div className="form-control">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" required placeholder='Name' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required placeholder='password' />
                </div>
                <div className="form-control">
                    <label htmlFor="Confirm">Password</label>
                    <input type="password" name="Confirm" required placeholder=' confirm password' />
                </div>

                <button className='btn-submit' type="submit">Sign Up </button>
            </form>
            <p>Already have an  Account <Link to={'/login'}> Please log-in</Link> </p>


        </div>
    );
};

export default SignUp;