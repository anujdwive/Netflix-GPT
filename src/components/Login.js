import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErroeMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // useRef hook give us to refreance of the element
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handelButtonClick = () => {

        // console.log(name.current.value);
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidation(email.current.value, password.current.value);
        // console.log(message);
        setErroeMessage(message);
        // it means if message give us to error so this statement return above message or do not move ahed
        if(message) return ;
        
        if(!isSignIn) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(
                        addUser(
                            {uid: uid, email: email, displayName: displayName}
                        ))
                    navigate("/browes")
                  }).catch((error) => {
                    // An error occurred
                    setErroeMessage(error.message);
                  });
                  console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErroeMessage(errorCode + "-" + errorMessage);
            });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browes")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErroeMessage(errorCode + "-" + errorMessage);
            });
        }
        
    }

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
                        <form onSubmit={(e) => e.preventDefault()} className='login-form-inpt'>
                            {!isSignIn && <input ref={name} className="email-input" placeholder="Full Name" />}
                            <input ref={email} type='text' className="email-input" placeholder="Email" />
                            <input ref={password} type='password' className="password-input" placeholder="Password" />
                            <p className='error-message'>{errorMessage}</p>
                            <button className='login-form-btn' onClick={handelButtonClick}>{isSignIn ? "Sign In " : "Sign Up"}</button>
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