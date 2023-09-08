
import { useAppSelector } from "../redux/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import { MoviesPopulityState, } from "../redux/slicers/moviePopulitySlicer";
import { seriesPopulityState } from "../redux/slicers/seriesPopulitySlicer";
import Card from "../components/card";

const Home = () => {
  const moviesPopulity: MoviesPopulityState = useAppSelector(state => state.moviesPopulity)
  const seriesPopulity: seriesPopulityState = useAppSelector(state => state.seriesPopulity)
  const movies = useAppSelector(state => state.movies.movies)

  return (
    <>
      <div className="w-[100%]">
        {movies !== null ?
          <div className="flex flex-wrap gap-4 w-full">
            {movies?.map((movie) => (

              <div className="mt-6" key={movie.id}>
                <Card key={movie?.id} item={movie} />

              </div>


            )
            )}
          </div>
          :
          <div>
            <Carrosel itens={moviesPopulity.topRated} title={"Top rated movies"} />
            <ScrollCard itens={seriesPopulity.AllDay} title="Series populity today"/>
    
            <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing"} />
            <Carrosel itens={seriesPopulity.topRated} title="Top rated series" />

          </div>
                
        }

      </div>
    </>
  )
}
export default Home;