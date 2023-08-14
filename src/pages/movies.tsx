import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Card from "../components/card.tsx"
import { searchMovies } from "../features/movies/renderMovies/slicer.ts"
import { searchMoviesPopulity } from "../features/movies/populity/slicer.ts"


const Movies = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector(state => state.movies.movies)



    useEffect(() => {
        dispatch(searchMoviesPopulity())
        dispatch(searchMovies())
    }, [dispatch])

    return (
        <>
            {movies.map((movie) =>
                <Card item={movie} />
            )}
        </>


    )
}
export default Movies