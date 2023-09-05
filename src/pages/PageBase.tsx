import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { searchMoviesPopulity } from "../redux/slicers/moviePopulitySlicer"
import { searchGenres } from "../redux/slicers/genresSlicer"
import { Outlet } from "react-router-dom"
import Menu from "../components/menu"
import UpcomingList from "../components/upcomingList"
import { Movie } from "../interfaces/movie"
import { searchSeriesPopulity } from "../redux/slicers/seriesSlicer"
import { searchPerson } from "../redux/slicers/personSlicer"
import Card from "../components/card"
import { Serie } from "../interfaces/serie"


const PageBase = () => {
    const dispatch = useAppDispatch()
    const upcoming: Movie[] = useAppSelector(state => state.moviesPopulity.upcoming)
    const movies: Movie[]| Serie[] | null = useAppSelector(state => state.movies.movies)

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchMoviesPopulity())
        dispatch(searchSeriesPopulity())
        dispatch(searchPerson())
    }, [dispatch])

    return (
        <main>
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%] flex flex-col justify-start">
                    {movies?.length == 0 ?
                        <Outlet />
                        :
                        <div className="flex flex-wrap w-full">
                            {movies?.map((movie) => (
                                <Card key={movie.id} item={movie} />
                            ))}
                        </div>
                    }
                
                </div>
                <UpcomingList itens={upcoming} title={"upcoming Movies"} />
            </div>
        </main>
    )
}

export default PageBase