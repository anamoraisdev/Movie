import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { searchMoviesPopulity } from "../redux/slicers/moviePopulitySlicer"
import { searchGenres } from "../redux/slicers/genresSlicer"
import { Outlet } from "react-router-dom"
import Menu from "../components/menu"
import UpcomingList from "../components/upcomingList"
import { searchSeriesPopulity } from "../redux/slicers/seriesPopulitySlicer"
import { searchPerson } from "../redux/slicers/personSlicer"
import Card from "../components/card"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const PageBase = () => {
    const dispatch = useAppDispatch()
    const upcoming = useAppSelector(state => state.moviesPopulity.upcoming)
    const movies = useAppSelector(state => state.movies.movies)

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchMoviesPopulity())
        dispatch(searchSeriesPopulity())
        dispatch(searchPerson())
    }, [dispatch])

    return (
        <main>
            <Navbar />
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%] flex flex-col justify-start">


                    <Outlet />

                </div>
                <UpcomingList itens={upcoming} title={"upcoming Movies"} />
            </div>
            <Footer/>


     
        </main>
    )
}

export default PageBase