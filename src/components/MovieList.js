import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div className='movie-title-container'>
        <div className='title'>
            <h1>{title}</h1>
        </div>
        <div className='movieCard-container'>
            {movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
    </div>
  )
}

export default MovieList