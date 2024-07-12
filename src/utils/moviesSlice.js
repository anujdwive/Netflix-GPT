import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies= action.payload
        },
        addMovieTrailer: (state, action) => {
            state.addTrailer= action.payload
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;