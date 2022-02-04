import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login.....
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email
                // and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

        //some fancy firebase register.....
        
    }


    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login__logo'    
                    src="photo/logo2.png" alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)
                    } />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        e =>setPassword(e.target.value)
                    }/>

                    <button type='submit' onClick={signIn}
                        className='login__signInButton'>Sign In
                    </button>
                </form>
                <p>
                    By sign-in you agree to EasyBuy's
                    Conditions of Use & and Sale. Please
                    see pur Privacy Notice, Our Cookies Notice
                    and our Interest-Based Ads Notice 
                </p>

                <button onClick={register}
                    className='login__registerButton' >Create Your EasyBuy Account
                </button>
            </div>
        </div>
    );
}

export default Login;
