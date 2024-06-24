import './index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/Authentification';


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate('/User');
    };

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handlesubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>


            {/* <NavLink  to={'/User'} className="sign-in-button" type="submit">
                Sign In
            </NavLink>  */}
            <button className="sign-in-button" type="submit">Sign In</button> 
            </form>
        </section>
    </main>
    )
  }
  