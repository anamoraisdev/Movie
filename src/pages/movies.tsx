import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Card from "../components/card.tsx"
import { searchMovies } from "../redux/movies/renderMovies/slicer.ts"
import { searchMoviesPopulity } from "../redux/movies/populity/slicer.ts"
import { Movie } from "../interfaces/movie.ts"


const Movies = () => {
    const dispatch = useAppDispatch()
    const movies: Movie[] = useAppSelector(state => state.movies.movies)

    useEffect(() => {
        dispatch(searchMoviesPopulity())
        dispatch(searchMovies())
    }, [dispatch])

    return (
        <>
            {movies.map((movie) =>
                <Card key={movie.id} item={movie} />
            )}
        </>


    )
}
export default Movies