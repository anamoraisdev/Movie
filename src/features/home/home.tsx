
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {  searchReleases } from "../movies/slicer"

const Home = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.movies.releases)

    useEffect(() => {
        dispatch(searchReleases())
    }, [dispatch])
    
    return (
        <main>
            <p>  Welcome to the page Home</p>
            <a href="/movies"> LINK</a>
        </main>
    )
}

export default Home