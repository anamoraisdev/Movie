
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { searchMovies } from "../movies/slicer"
import { searchGenres, } from "../genres/slicer"

const Home = () => {
    const dispatch = useAppDispatch()
    const genres = useAppSelector(state => state.genres.genres)
    const movies = useAppSelector(state => state.movies.releases)

    useEffect(() => {
        dispatch(searchMovies())
        dispatch(searchGenres())
    }, [dispatch])
    
    return (
        <main>
            <p>  Welcome to the page Home</p>
            <a href="/movies"> LINK</a>
            {genres.map((item) => <p key={item.id}>{item.name}</p>)}
            {movies.map((item) => <p key={item.id}>{item.title}</p>)}
        </main>
    )
}

export default Home