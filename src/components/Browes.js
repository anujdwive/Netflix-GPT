import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browes = () => {

  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='browes-big-container'>
      <div className='browes-container'>
        <Header />
        <MainContainer />
      </div>
      <div className='secondry-container'>
      <SecondryContainer />
      </div>
    </div>
  )
}

export default Browes