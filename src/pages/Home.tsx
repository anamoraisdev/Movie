
import {  useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import { MoviesPopulityState,} from "../redux/movies/populity/slicer";
import {  seriesPopulityState } from "../redux/series/slicer";

const Home = () => {
  const moviesPopulity: MoviesPopulityState = useAppSelector(state => state.moviesPopulity)
  const seriesPopulity: seriesPopulityState = useAppSelector(state => state.seriesPopulity)

  return (
    <>
      <div className="w-[100%]">
        <Carrosel itens={moviesPopulity.topRated} title={"Top rated movies"} />
        <ScrollCard itens={seriesPopulity.AllDay} title="Series populity today" />
        <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing"} />
        <Carrosel itens={seriesPopulity.topRated} title="Top rated series"/>
      </div>
    </>
  )
}
export default Home;