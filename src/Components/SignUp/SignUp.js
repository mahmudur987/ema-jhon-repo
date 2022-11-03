import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'
const SignUp = () => {
    const [error, Seterror] = useState(null);
    const { signup } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPasword = form.confirm.value;

        if (password.length < 6) {
            Seterror('password must be 6 character long');
            return;
        }
        if (password !== confirmPasword) {
            Seterror('your password didnt match');
            return;
        }

        signup(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
        }).catch(error => {
            console.error('error', error)
        })

        console.log(email, password, confirmPasword)
    }
    return (
        <div className='form-container'>
            <h1>please signUp </h1>
            <form onSubmit={handleSubmit} className='form'>

                <div className="form-control">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" placeholder='Name' />
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
                    <input type="password" name="confirm" placeholder=' confirm password' />
                </div>
                <p>
                    {error}

                </p>
                <button className='btn-submit' type="submit">Sign Up </button>
            </form>
            <p>Already have an  Account <Link to={'/login'}> Please log-in</Link> </p>


        </div>
    );
};

export default SignUp;