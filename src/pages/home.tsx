import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import Menu from "../components/menu"
import ScrollCard from "../components/scrollCard"
import UpcomingList from "../components/upcomingList"
import { searchReleases } from "../features/movies/releases/slicer"
import { searchNowPlaying } from "../features/movies/nowPlaying/slicer"
import { searchUpcoming } from "../features/movies/upcoming/slicer"


const Home = () => {
    const dispatch = useAppDispatch()
    const releases = useAppSelector(state => state.releases.releases)
    const nowPlaying = useAppSelector(state => state.nowPlaying.movies)
    const upcoming = useAppSelector(state => state.upcoming.movies)

    useEffect(() => {
        dispatch(searchReleases())
        dispatch(searchNowPlaying())
        dispatch(searchUpcoming())
    }, [dispatch])

    return (
        <main>
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%]">
                    <ScrollCard title={"Agora nos cinemas"} itens={nowPlaying} />
                    <ScrollCard title={"Tendencias do dia"} itens={releases} />
                </div>
                <div className="px-5">
                    <UpcomingList title={"upcoming movies"} itens={upcoming} />
                </div>
            </div>
        </main>
    )
}

export default Home