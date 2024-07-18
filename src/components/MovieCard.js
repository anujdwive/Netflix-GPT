import React from 'react'
import { POSTER_PATH } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='movies-img'>
        <img alt='Movie Poster' src={POSTER_PATH + posterPath} />
    </div>
  )
}

export default MovieCard