import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import UpcomingList from "../components/upcomingList"
import Menu from "../components/menu.tsx"
import Card from "../components/card.tsx"
import { searchMovies } from "../features/movies/renderMovies/slicer.ts"
import { searchMoviesPopulity } from "../features/movies/populity/slicer.ts"


const Movies = () => {
    const dispatch = useAppDispatch()
    const upcoming = useAppSelector(state => state.moviesPopulity.upcoming)
    const movies = useAppSelector(state => state.movies.movies)



    useEffect(() => {
        dispatch(searchMoviesPopulity())
        dispatch(searchMovies())
    }, [dispatch])

    return (
      
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
  
    )
}
export default Movies