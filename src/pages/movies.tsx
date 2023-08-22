import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Card from "../components/card.tsx"
import { searchMovies } from "../redux/movies/renderMovies/slicer.ts"
import { Movie } from "../interfaces/movie.ts"
import ScrollCard from "../components/scrollCard.tsx"
import Carrosel from "../components/carrosel.tsx"


const Movies = () => {
    const movies: Movie[] = useAppSelector(state => state.movies.movies)
    const moviesPopulity = useAppSelector( state => state.moviesPopulity)

    return (
        <div className="flex flex-col">
            <Carrosel itens={moviesPopulity.nowPlaying} title="Now playing"/>
            <ScrollCard itens={moviesPopulity.topRated} title="Top rated"/>
            <ScrollCard itens={moviesPopulity.moviesAllDay} title="Populity all day"/>
         
        </div>
    )
}
export default Movies