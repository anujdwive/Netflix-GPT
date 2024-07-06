import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='header-container'>
      <header className='header'>
          <div className='header-logo-container'>
            <div className='header-logo'>
              <img className='logo' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Header-Logo' />
            </div>
          </div>
          
         { 
          user && <div className='logout-btn'>
              <button onClick={handelSignOut}>Sign Out</button>
          </div>
          }
          
      </header>
    </div>
  )
}

export default Header