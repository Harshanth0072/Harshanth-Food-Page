import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <button type="button" onClick={() => setShowLogin(false)} className="login-close-button">×</button>
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' />
                </div>
                
                <button className="login-submit-button">{currState==="Sign Up"?"Create account" : "Login"}</button>
                
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I hereby agree to the terms of use & privacy policy</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
                }
                
                
            </form>
        </div>
    )
}

export default LoginPopup
