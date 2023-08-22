
import { useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";

import ScrollCard from "../components/scrollCard";

const Series = () => {
    const seriesPopulity = useAppSelector(state => state.seriesPopulity)
    
    return (
        <div>
            <Carrosel itens={seriesPopulity.nowPlaying} title="now playing"/>
            <ScrollCard itens={seriesPopulity.AllDay} title="Series populity today"/>
            <ScrollCard itens={seriesPopulity.topRated} title="Top rated"/>
        </div>
    )
}

export default Series;