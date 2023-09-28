
import { useParams } from "react-router-dom";
import { useAppSelector } from "../utils/hooks/useRedux";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import Item from "./Item";
import SearchResultView from "../components/searchResult";




const Series = () => {
    const { id } = useParams()

    const seriesPopulity = useAppSelector(state => state.populity.series) 
    const resultSearch = useAppSelector(state => state.movies.resultSearch)
  
    
    return (
        <div>
            {id ? <Item /> : <SearchResultView /> }
            
            {!resultSearch && !id && seriesPopulity &&
                <div className="flex flex-col">
                    <Carrosel itens={seriesPopulity?.upcoming} title="Airing Today"/>
                    <ScrollCard itens={seriesPopulity?.topRated} title="Top rated 🔥"  />
                    <Carrosel itens={seriesPopulity?.allDay} title="Series populity today 🎖️"/>
                    <ScrollCard itens={seriesPopulity?.nowPlaying} title="now playing 🎬" />
                </div>
            }
        </div>
    )
}

export default Series;