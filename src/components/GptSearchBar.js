import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='gptSearchBar-container'>
        <form className='gptSearchBar-form'>
            <input className='gptSearchBar-inpt' type='text' placeholder={lang[langKey].gptSearchPlaceholder}  />
            <button className='gptSearchBar-btn'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar