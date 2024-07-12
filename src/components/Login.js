import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_LOGO } from '../utils/constant';



const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErroeMessage] = useState(null);
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
                  }).catch((error) => {
                    // An error occurred
                    setErroeMessage(error.message);
                  });
                //   console.log(user);
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
                // console.log(user);
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
                <img className='login-back-img' src={BACKGROUND_LOGO}
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