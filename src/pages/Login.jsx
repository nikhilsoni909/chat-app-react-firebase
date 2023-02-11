import React from 'react'
import Add from "../img/addAvatar.png";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) { 
            console.log(err);
            setErr(true);
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">NIK Chat</span>
                <span className="title">Login</span>

                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />

                    <button>Sign in</button>
                    {err && <span> wrong email or password</span>}

                </form>
                <p>Don't have any accont ?<Link to="/register">Register</Link> </p>
            </div>

        </div>
    )
}
export default Login;