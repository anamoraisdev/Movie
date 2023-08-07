import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchGenres } from "../features/genres/slicer"
import { searchNowPlaying } from "../features/movies/nowPlaying/slicer"
import { searchMovies } from "../features/movies/populity/slicer"
import { searchReleases } from "../features/movies/releases/slicer"
import ScrollCard from "../components/scrollCard"
import Filter from "../components/filter"



const Movies = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.releases.releases)
    const movies = useAppSelector(state => state.moviesPopulity.movies)
    const nowPlaying = useAppSelector(state => state.nowPlaying.movies)

    useEffect(() => {
        dispatch(searchMovies())
        dispatch(searchReleases())
        dispatch(searchGenres())
        dispatch(searchNowPlaying())
    }, [dispatch])

    return (
        <div>
            <Filter/>
            <ScrollCard title={"Agora nos cinemas"} itens={nowPlaying}/>
            <ScrollCard title={"Tendencias do dia"} itens={releases}/>
            <ScrollCard title={"Mais votados"} itens={movies}/>
        </div>
    )
}
export default Movies