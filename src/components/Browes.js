import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';

const Browes = () => {

  useNowPlayingMovies();

  return (
    <div className='browes-container'>
      <Header />
      <MainContainer /> 
    </div>
  )
}

export default Browes