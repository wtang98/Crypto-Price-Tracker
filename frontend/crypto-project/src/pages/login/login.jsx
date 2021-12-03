import React, {useState}  from 'react'
import { auth,provider } from '../../jses/firebase';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import './login.scss'
import { useStateValue } from '../../jses/stateprovider'
import { actionTypes } from '../../jses/reducer';

const Login = () => {
    const navigate = useNavigate();
    const [state, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const signInGoogle = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            navigate("/")
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h6>Email</h6>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
                    
                    <h6>Password</h6>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                </form>
                <Button onClick={signIn}>Sign in</Button>
                <Button  type="submit" onClick={signInGoogle}>
                    Sign in with Google
                </Button>
                <Button onClick={e=>navigate("/signup")}>Create an account</Button>
            </div>
        </div>
    )
}

export default Login
