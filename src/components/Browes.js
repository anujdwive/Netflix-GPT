import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearchMainPage from './GptSearchMainPage';
import { useSelector } from 'react-redux';

const Browes = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopulerMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='browes-big-container'>
      <div className='browes-container'>
          <Header />
          {showGptSearch ? <GptSearchMainPage /> :
          <>
          <MainContainer />
          <div className='secondry-container'>
          <SecondryContainer />
          </div>
          </>
          }
      </div>
    </div>
  )
}

export default Browes