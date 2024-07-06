import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browes from './Browes'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browes",
            element: <Browes />
        }
    ])

    useEffect(() => {
        // This Mathod keeps the track of when user sign in, sign up and logout
        onAuthStateChanged(auth, (user) => {
            if (user) {
            // User is signed in or signed up
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });
    }, [])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body