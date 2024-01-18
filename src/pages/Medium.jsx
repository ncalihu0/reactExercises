import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Movies.css'

export default function Medium() {
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState('');
    useEffect(() => {
        const searchMovies = async () => {
            try {

                const url = `https://api.themoviedb.org/3/search/movie?query=${searched}`
                const apiKey = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjY5YzdjYTI1YWY5OGUwNDIwOGNkNjcyMTljMzIxMyIsInN1YiI6IjY1NzdhMGY0OTQ1MWU3MGZlYTZlODI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.waXvvnV7RZ375e17_ZCcBrH13zU1RMFAX0j86oINe18`

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`
                    }
                }

                const res = await axios.get(url, config)
                setMovies(res.data.results)
            } catch (err) {
                console.log(err)
            }
        }
        searchMovies()

    }, [searched, setMovies])

    const handleInput = (e) => {
        setSearched(e.target.value);
    }


    return (
        <div>
            <section className='searchBar'>
                <input type='text' placeholder='Search movies' value={searched} onChange={handleInput}></input>
            </section>


            <section className='grid'>
                {movies.map(movie => (
                    <section className='search-container' key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
                        <p>{movie.original_title}</p>
                        <section className='description'>
                            <p>{movie.overview}</p>
                            <p id='movieDate'>Release date: {movie.release_date}</p>
                            <p>Popularity: {movie.popularity}</p>
                            <p>Original language: {movie.original_language}</p>
                        </section>
                    </section>
                ))}
            </section>
        </div>
    )
}
