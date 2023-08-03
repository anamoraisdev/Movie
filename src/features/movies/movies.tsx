import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { searchReleases } from "./slicer"
import ScrollCard from "../../components/scrollCard"

const Movies = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.movies.releases)

    useEffect(() => {
        dispatch(searchReleases())
    }, [dispatch])

    return (
        <div>
            Welcome to the page Movies
            <ScrollCard releases={releases}/>
        </div>
    )
}
export default Movies