import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Menu from "../components/menu"
import ScrollCard from "../components/scrollCard"
import UpcomingList from "../components/upcomingList"
import Carrosel from "../components/carrosel"
import { searchMoviesPopulity } from "../features/movies/populity/slicer"
import { searchMovies } from "../features/movies/renderMovies/slicer"
import { searchGenres } from "../features/genres/slicer"


const Home = () => {
    const dispatch = useAppDispatch()
    const moviesPopulity = useAppSelector(state => state.moviesPopulity)

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchMoviesPopulity())
        dispatch(searchMovies())
    }, [dispatch])

    return (
        <main>
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%]">
                    <Carrosel items={moviesPopulity.nowPlaying}/>
                    <ScrollCard title={"Tendencias do dia"} itens={moviesPopulity.moviesAllDay} />
                </div>
                <div className="px-5">
                    <UpcomingList title={"upcoming movies"} itens={moviesPopulity.upcoming} />
                </div>
            </div>
        </main>
    )
}

export default Home