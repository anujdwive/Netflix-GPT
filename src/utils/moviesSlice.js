import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        populerMovies: null,
        topRatedMovies: null,
        UpcomingMovies: null,
        addTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies= action.payload
        },
        addPopulerMovies: (state, action) => {
            state.populerMovies= action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies= action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.UpcomingMovies= action.payload
        },
        addMovieTrailer: (state, action) => {
            state.addTrailer= action.payload
        }
    }
});

export const {addNowPlayingMovies, addPopulerMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;