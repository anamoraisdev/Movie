import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchGenres } from "../features/genres/slicer"
import { searchNowPlaying } from "../features/movies/nowPlaying/slicer"
import { searchMovies } from "../features/movies/populity/slicer"
import { searchReleases } from "../features/movies/releases/slicer"
import ScrollCard from "../components/scrollCard"
import { searchUpcoming } from "../features/movies/upcoming/slicer"
import UpcomingList from "../components/upcomingList"



const Movies = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.releases.releases)
    const movies = useAppSelector(state => state.moviesPopulity.movies)
    const nowPlaying = useAppSelector(state => state.nowPlaying.movies)
    const upcoming = useAppSelector(state => state.upcoming.movies)

    useEffect(() => {
        dispatch(searchMovies())
        dispatch(searchReleases())
        dispatch(searchGenres())
        dispatch(searchNowPlaying())
        dispatch(searchUpcoming())
    }, [dispatch])

    return (
        <div>
            <div className="flex justify-between">
                <div className="w-[80%]">
                    <ScrollCard title={"Agora nos cinemas"} itens={nowPlaying}/>
                    <ScrollCard title={"Tendencias do dia"} itens={releases}/>
                    <ScrollCard title={"Mais votados"} itens={movies}/>
                </div>
                <div className="p-5">
                    <UpcomingList title={"upcoming movies"} itens={upcoming}/>    
                </div>
            </div>
        </div>
    )
}
export default Movies