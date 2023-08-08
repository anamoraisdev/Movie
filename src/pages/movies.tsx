import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchUpcoming } from "../features/movies/upcoming/slicer"
import UpcomingList from "../components/upcomingList"
import Menu from "../components/menu.tsx"
import Card from "../components/card.tsx"
import { searchMovies } from "../features/movies/renderMovies/slicer.ts"


const Movies = () => {
    const dispatch = useAppDispatch()
    const upcoming = useAppSelector(state => state.upcoming.movies)
    const movies = useAppSelector(state => state.movies.movies)



    useEffect(() => {
        dispatch(searchUpcoming())
        dispatch(searchMovies())
    }, [dispatch])

    return (
      
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="flex flex-wrap">
                    {movies.map((movie) =>
                        <Card item={movie} />
                    )}
                </div>
                <div className="px-5">
                    <UpcomingList title={"upcoming movies"} itens={upcoming} />
                </div>
            </div>
  
    )
}
export default Movies