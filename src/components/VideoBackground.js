import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    // Fetch trailer video
    const trailerVideo = useSelector((story) => story.movies?.addTrailer);
    useMovieTrailer(movieId);

    return (
        <div className='browes-video-container'>
            <iframe 
            //  src="https://www.youtube.com/embed/L4DrolmDxmw?si=7JCX-jh8iULyuBPV" //This is not retreve dynamic key
            //  src={ "https://www.youtube.com/embed/" + trailerId } // Here we use dynamic key using state veriable
            src={ "https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} // Here we use dynamic key using redux store
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
        </div>
    )
}

export default VideoBackground