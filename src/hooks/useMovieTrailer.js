import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // We want to fetching the key of trailer video so that's why we use this state veriable but we have another way to fetch video key that is redux.
    // const [trailerId, setTrailerId] = useState(null); 

    const getMovieVideoData = async () => {
        const videoApi = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', TMDB_API_OPTIONS)
        const json = await videoApi.json();
        // console.log(json);

        const filterdData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdData.length ? filterdData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addMovieTrailer(trailer))

        // setTrailerId(trailer.key); // Here we use dynamic key using state veriable
    }

    useEffect(() => {
        getMovieVideoData();
    }, [])
}

export default useMovieTrailer;