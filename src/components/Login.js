import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const handelToggel = () => {
        setIsSignIn(!isSignIn);
    }


  return (
    <div className='login-ui-container'>
        <div className='login-ui'>
            <div className='login-ui-img'>
                <img className='login-back-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg'
                alt='Background img' />
            </div>
                <header className='header-big-container'><Header /></header>
            <div className='login-form-container'>
                <div className="form-start">
                    <div className='login-form'>
                        <header className='heading-container'>
                            <h1 className='heading'>{isSignIn ? "Sign In " : "Sign Up"}</h1>
                        </header>
                        <form className='login-form-inpt'>
                            {!isSignIn && <input className="email-input" placeholder="Full Name" />}
                            <input className="email-input" placeholder="Email" />
                            <input className="password-input" placeholder="Password" />
                            <button className='login-form-btn'>{isSignIn ? "Sign In " : "Sign Up"}</button>
                            <p onClick={handelToggel}>{isSignIn ? "New to Netflix? Sign up now." : "You are a registered user ?"}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Login