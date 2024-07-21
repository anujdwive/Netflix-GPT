import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { HEADER_LOGO, SUPPORTED_LANGUAGE } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handelSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    // This Mathod keeps the track of when user sign in, sign up and logout
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in or signed up
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}))
          navigate("/browes");
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/");
        }
      });

      // Unsubscribe When component unmount;
      return () => unsubscribe();
}, []);

const handelGptSearch= () => {
  // Togle Gpt Search
  dispatch(toggleGptSearchView());
}
const handleLanguageChange= (e) => {
  // Togle Gpt Search
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className={user ? 'headerHome-container' : 'header-container'}>
      <header className={user ? 'headerHome' : 'header'}>
          <div className={user ? 'headerHome-logo-container' : 'header-logo-container'}>
            <div className={user ? 'headerHome-logo' : 'header-logo'}>
              <img className={user ? 'home-logo' : 'logo'} src={HEADER_LOGO} alt='Header-Logo' />
            </div>
          </div>
          
         { 
          user && <div className='logout-btn'>
              {
              showGptSearch && <select onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGE.map((lang) => <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
              </select>
              }
              <button className='search-btn' onClick={handelGptSearch}>Gpt Search</button>
              <button onClick={handelSignOut}>Sign Out</button>
          </div>
          }
          
      </header>
    </div>
  )
}

export default Header