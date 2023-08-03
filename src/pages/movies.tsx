import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Filter from "../components/filter"
import ScrollCard from "../components/scrollCard"
import { searchGenres } from "../features/genres/slicer"
import { searchReleases } from "../features/releases/slicer"
import { searchMovies } from "../features/movies/slicer"


const Movies = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.releases.releases)
    const movies = useAppSelector(state => state.moviesPopulity.movies)

    useEffect(() => {
        dispatch(searchMovies())
        dispatch(searchReleases())
        dispatch(searchGenres())
    }, [dispatch])

    return (
        <div>
            <Filter/>
            <ScrollCard title={"Tendencias do dia"} itens={releases}/>
            <ScrollCard title={"Mais votados"} itens={movies}/>
        </div>
    )
}
export default Movies