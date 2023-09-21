import { useAppSelector } from "../redux/hooks.ts"
import ScrollCard from "../components/scrollCard.tsx"
import Carrosel from "../components/carrosel.tsx"
import { useParams } from "react-router-dom"
import Item from "./Item.tsx"
import SearchResultView from "../components/searchResult.tsx"




const Movies = () => {
    const { id } = useParams()
    const moviesPopulity = useAppSelector(state => state.moviesPopulity)
    const movies = useAppSelector(state => state.movies.movies)

    return (
        <>

            {id ? 
            <div>
                <Item />
            </div>
            
            : <SearchResultView />
            }


            {
                movies === null && !id &&

                <div className="flex flex-col">
                    <Carrosel itens={moviesPopulity.moviesAllDay} title="Populity today 🎖️" />
                    <ScrollCard itens={moviesPopulity.topRated} title="Top rated 🔥"  />
                    <Carrosel itens={moviesPopulity.upcoming} title="Upcoming Movies 🍿"/> 
                    <ScrollCard itens={moviesPopulity.nowPlaying} title="Now playing 🎬" />
                </div>

            }

        </>
    )
}
export default Movies