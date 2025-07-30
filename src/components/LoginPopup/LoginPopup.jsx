import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <button onClick={() => setShowLogin(false)} className="login-close-button">×</button>
                </div>
                <div className="login-popup-inputs">
                    <input type='text'placeholder='Your name' required/>
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' />
                </div>
                <button>{currState==="Sign Up"?"Create account" : "Login"}</button>
            </form>
        </div>
    )
}

export default LoginPopup
