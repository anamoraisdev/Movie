import { useAppSelector } from "../app/hooks"
import ScrollCard from "../components/scrollCard.tsx"
import Carrosel from "../components/carrosel.tsx"
import { useParams } from "react-router-dom"

import Item from "./Item.tsx"

const Movies = () => {
    const { id } = useParams()
    const moviesPopulity = useAppSelector(state => state.moviesPopulity)

    return (
        <>
            {id ?
                <div>
                    <Item/>
                </div>
                :
                <div className="flex flex-col">
                    <Carrosel itens={moviesPopulity.moviesAllDay} title="Populity all day" />
                    <ScrollCard itens={moviesPopulity.topRated} title="Top rated" />
                    <ScrollCard itens={moviesPopulity.nowPlaying} title="Now playing" />
                </div>
            }
        </>
    )
}
export default Movies