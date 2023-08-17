import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchMoviesPopulity } from "../redux/movies/populity/slicer"
import { searchMovies } from "../redux/movies/renderMovies/slicer"
import { searchGenres } from "../redux/genres/slicer"
import { Outlet } from "react-router-dom"
import Menu from "../components/menu"
import UpcomingList from "../components/upcomingList"
import { Movie } from "../interfaces/movie"
import { searchSeriesPopulity } from "../redux/series/slicer"


const PageBase = () => {
    const dispatch = useAppDispatch()
    const upcoming: Movie[] = useAppSelector(state => state.moviesPopulity.upcoming)

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchMoviesPopulity())
        dispatch(searchMovies())
        dispatch(searchSeriesPopulity())
    }, [dispatch])

    return (
        <main>
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%] flex flex-col justify-start">
                    <Outlet />
                </div>
                <UpcomingList itens={upcoming} title={"upcoming Movies"} />
            </div>
        </main>
    )
}

export default PageBase