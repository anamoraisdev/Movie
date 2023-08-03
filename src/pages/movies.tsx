import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Filter from "../components/filter"
import ScrollCard from "../components/scrollCard"
import { searchGenres } from "../features/genres/slicer"
import { searchReleases } from "../features/releases/slicer"


const Movies = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.movies.releases)

    useEffect(() => {
        dispatch(searchReleases())
        dispatch(searchGenres())
    }, [dispatch])

    return (
        <div>
            <Filter/>
            <ScrollCard releases={releases}/>
        </div>
    )
}
export default Movies