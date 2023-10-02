import { useAppSelector } from "../utils/hooks/useRedux.ts"
import ScrollCard from "../components/scrollCard.tsx"
import Carrosel from "../components/carrosel.tsx"
import { useParams } from "react-router-dom"
import Item from "./Item.tsx"
import SearchResultView from "../components/searchResult.tsx"
import { Populity } from "../redux/slicers/populitySlicer.ts"


const Movies = () => {
    const { id } = useParams()
    const moviesPopulity = useAppSelector(state => state.populity.movies) as Populity
    const resultSearch = useAppSelector(state => state.movies.resultSearch)

    return (
        <>
            {id ? <Item /> : <SearchResultView />}

            {
                !resultSearch && !id && moviesPopulity &&

                <div className="flex flex-col">
                    <Carrosel itens={moviesPopulity.allDay} title="Populity today 🎖️" />
                    <ScrollCard itens={moviesPopulity.topRated} title="Top rated 🔥" />
                    <Carrosel itens={moviesPopulity.upcoming} title="Upcoming Movies 🍿" />
                    <ScrollCard itens={moviesPopulity.nowPlaying} title="Now playing 🎬" />
                </div>

            }
        </>
    )
}
export default Movies;