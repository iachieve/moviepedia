import {FETCH_MOVIES, SEARCH_MOVIE} from './types';
import axios from 'axios';
import {APIKey} from '../APIKeys';
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
};


let movies = [
{Title: "Fast & Furious 6", Year: "2013", imdbID: "tt1905041", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"},
{Title: "Fast Five", Year: "2011", imdbID: "tt1596343", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"},
{Title: "The Fast and the Furious", Year: "2001", imdbID: "tt0232500", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMD…mMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
{Title: "Fast & Furious", Year: "2009", imdbID: "tt1013752", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNz…DZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
 {Title: "2 Fast 2 Furious", Year: "2003", imdbID: "tt0322259", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYW…WQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
{Title: "The Fast and the Furious: Tokyo Drift", Year: "2006", imdbID: "tt0463985", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"},
{Title: "Fast & Furious Presents: Hobbs & Shaw", Year: "2019", imdbID: "tt6806448", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMm…mRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},
{Title: "Fast Times at Ridgemont High", Year: "1982", imdbID: "tt0083929", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYzBlZjE1MD…DBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"},
{Title: "Fast Food Nation", Year: "2006", imdbID: "tt0460792", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYzM0ODQ5OG…DI1YTAwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
{Title: "How to Sell Drugs Online (Fast)", Year: "2019–", imdbID: "tt9184994", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMmFjYmFhMW…DhiNDAzXkEyXkFqcGdeQXVyNjkwMTY5OTk@._V1_SX300.jpg"}
]
export const fetchMovies = text => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    //     .then(response => dispatch({
    //         type: FETCH_MOVIES,
    //         payload: response.data
    //     }));

    dispatch({
        type: FETCH_MOVIES,
        payload: movies
    });
};