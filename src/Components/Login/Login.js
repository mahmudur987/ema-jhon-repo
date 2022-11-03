import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'
const Login = () => {

    const { signin, Setuser, } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            alert('password must be 6 character long');
            return;
        }
        signin(email, password).then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            Setuser(user);
            navigate(from, { replace: true })
        }).catch(error => {
            console.error('error', error)
        })
        console.log(email, password)
    }

    return (
        <div className='form-container'>
            <h1 className='from-title'>please log in</h1>

            <form onSubmit={handleSubmit} className='form'>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required placeholder='password' />
                </div>

                <button className='btn-submit' type="submit">Log in</button>

            </form>
            <p>New to Ema-jhon <Link to={'/signup'}> Create a new account</Link> </p>





        </div>
    );
};

export default Login;