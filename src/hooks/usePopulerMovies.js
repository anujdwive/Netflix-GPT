import { TMDB_API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

const usePopulerMovies = () => {
    const dispatch = useDispatch()

    const getPopulerMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', TMDB_API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(() => {
      getPopulerMovies();
    }, []);
}

export default usePopulerMovies;