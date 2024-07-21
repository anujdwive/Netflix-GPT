import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetion from './GptMovieSuggetion';
import { BACKGROUND_LOGO } from '../utils/constant';

const GptSearchMainPage = () => {
  return (
    <div className='gpt-main-page'>
      <div className='login-ui-img'>
        <img className='login-back-img' src={BACKGROUND_LOGO}
        alt='Background img' />
      </div>
      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  )
}

export default GptSearchMainPage;