import { movies as moviesFormFakeAPI } from "../../fakeApi"
import { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    let [moviesList, setMoviesList] = useState(moviesFormFakeAPI)

    const removeMovie = movieId => {
        const filteredMovies = moviesList.filter(elm => elm._id != movieId)
        setMoviesList(filteredMovies)
    }

    return (

        <section>

            <h1>Listado de pelis!</h1>
            {
                moviesList.map(movie => <MovieCard key={movie._id} {...movie} removeMovie={removeMovie} />)
            }
        </section>
    )
}

export default MoviesList