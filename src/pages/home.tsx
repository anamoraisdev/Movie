import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchMoviesPopulity } from "../features/movies/populity/slicer"
import { searchMovies } from "../features/movies/renderMovies/slicer"
import { searchGenres } from "../features/genres/slicer"
import { Outlet } from "react-router-dom"
import Menu from "../components/menu"
import UpcomingList from "../components/upcomingList"


const Home = () => {
    const dispatch = useAppDispatch()
    const upcoming = useAppSelector(state => state.moviesPopulity.upcoming)
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
                    <Outlet />
                </div>
                <div className="p-2">
                    <UpcomingList itens={upcoming} title={"upcoming Movies"} />
                </div>
            </div>
        </main>
    )
}

export default Home