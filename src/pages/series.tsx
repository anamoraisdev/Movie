
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Carrosel from "../components/carrosel";

import ScrollCard from "../components/scrollCard";
import Item from "../components/Item";
import Card from "../components/card";


const Series = () => {
    const { id } = useParams()
    const seriesPopulity = useAppSelector(state => state.seriesPopulity)
    const movies = useAppSelector(state => state.movies.movies)

    return (
        <div>

            {id ?
                <div>
                    <Item />
                </div>
                :
                <div className="flex flex-wrap gap-4 w-full">
                    {movies?.map((movie) => (

                        <div className="mt-6" key={movie.id}>
                            <Card key={movie?.id} item={movie} />

                        </div>


                    )
                    )}
                </div>
            }



           
            

            {
                movies === null && !id && 

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