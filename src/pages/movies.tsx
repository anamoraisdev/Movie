import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Card from "../components/card.tsx"
import { searchMovies } from "../redux/movies/renderMovies/slicer.ts"
import { Movie } from "../interfaces/movie.ts"
import ScrollCard from "../components/scrollCard.tsx"


const Movies = () => {
    const movies: Movie[] = useAppSelector(state => state.movies.movies)
    const topRated = useAppSelector( state => state.moviesPopulity.topRated)

    return (
        <div className="flex flex-col gap-6">
            <ScrollCard itens={topRated} title="Top rated"/>
            <h1 className="font-bold mb-3">All Movies</h1>
            <div className="flex flex-wrap gap-10">
                {movies.map((movie) =>
                    <Card key={movie.id} item={movie} />
                )}

            </div>
        </div>
    )
}
export default Movies