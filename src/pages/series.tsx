
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";

import ScrollCard from "../components/scrollCard";
import Item from "./Item";

const Series = () => {
    const { id } = useParams()
    const seriesPopulity = useAppSelector(state => state.seriesPopulity)

    return (
        <div>
            {id ? <Item />
                :
                <div>

                    <Carrosel itens={seriesPopulity.AllDay} title="Series populity today" />
                    <ScrollCard itens={seriesPopulity.topRated} title="Top rated" />
                    <ScrollCard itens={seriesPopulity.nowPlaying} title="now playing" />
                </div>
            }
        </div>
    )
}

export default Series;