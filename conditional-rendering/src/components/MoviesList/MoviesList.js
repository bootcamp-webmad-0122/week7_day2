import { movies as moviesFormFakeAPI } from "../../fakeApi"
import { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(moviesFormFakeAPI)
    const [showMovies, setShowMovies] = useState(false)

    const removeMovie = movieId => {
        const filteredMovies = moviesList.filter(elm => elm._id != movieId)
        setMoviesList(filteredMovies)
    }

    const toggleShowMovies = () => setShowMovies(!showMovies)

    return (

        <section>

            <h1>Listado de pelis!</h1>
            <button onClick={toggleShowMovies}>{showMovies ? 'Ocultar' : 'Mostrar'} películas</button>
            {
                showMovies && moviesList.map(movie => <MovieCard key={movie._id} {...movie} removeMovie={removeMovie} />)
            }
        </section>
    )
}

export default MoviesList