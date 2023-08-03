import { useEffect } from "react"
import { useAppDispatch } from "../../app/hooks"
import CardReleases from "../../components/CardReleases"
import { searchReleases } from "./slicer"

const Movies = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(searchReleases())
    }, [dispatch])

    return (
        <div>
            Welcome to the page Movies
            <CardReleases />
        </div>
    )
}
export default Movies