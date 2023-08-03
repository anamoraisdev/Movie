import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { searchReleases } from "./slicer"
import ScrollCard from "../../components/scrollCard"
import { searchGenres } from "../genres/slicer"
import Filter from "../../components/filter"

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