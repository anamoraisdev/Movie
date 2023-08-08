import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchUpcoming } from "../features/movies/upcoming/slicer"
import UpcomingList from "../components/upcomingList"
import Menu from "../components/menu.tsx"
import Card from "../components/card.tsx"

const Movies = () => {
    const dispatch = useAppDispatch()
    const upcoming = useAppSelector(state => state.upcoming.movies)
    const movies = useAppSelector(state => state.genreMovies.movies)

    useEffect(() => {
        dispatch(searchUpcoming())
    }, [dispatch])

    return (
        <div>
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className=" w-[70%] flex justify-center flex-wrap">
                    {movies.map((movie) => 
                        <Card item={movie}/>
                    )}
                </div>
                <div className="px-5">
                    <UpcomingList title={"upcoming movies"} itens={upcoming} />
                </div>
            </div>
        </div>
    )
}
export default Movies