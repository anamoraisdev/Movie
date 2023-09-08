import { useAppSelector } from "../redux/hooks.ts"
import ScrollCard from "../components/scrollCard.tsx"
import Carrosel from "../components/carrosel.tsx"
import { useParams } from "react-router-dom"
import Item from "../components/Item.tsx"
import Card from "../components/card.tsx"



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
                    <Carrosel itens={moviesPopulity.moviesAllDay} title="Populity all day" />
                    <ScrollCard itens={moviesPopulity.topRated} title="Top rated" />
                    <ScrollCard itens={moviesPopulity.nowPlaying} title="Now playing" />
                </div>

            }

        </>
    )
}
export default Movies