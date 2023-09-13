
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import Item from "../components/Item";
import SearchResultView from "../components/searchResult";


const Series = () => {
    const { id } = useParams()
    const seriesPopulity = useAppSelector(state => state.seriesPopulity)
    const movies = useAppSelector(state => state.movies.movies)

    return (
        <div>
            {id ? <Item /> : <SearchResultView /> }
            
            {movies === null && !id &&
                <div className="flex flex-col">
                    <Carrosel itens={seriesPopulity.AllDay} title="Series populity today" />
                    <ScrollCard itens={seriesPopulity.topRated} title="Top rated" />
                    <ScrollCard itens={seriesPopulity.nowPlaying} title="now playing" />
                </div>
            }
        </div>
    )
}

export default Series;