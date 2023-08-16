import { useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import { MoviesPopulityState } from "../redux/movies/populity/slicer";

const MoviesPopulity = () => {
  const moviesPopulity: MoviesPopulityState = useAppSelector(state => state.moviesPopulity)

  return (
    <>
      <Carrosel itens={moviesPopulity.moviesAllDay} title={"Populity today"}/>
      <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing"}/>
      <ScrollCard itens={moviesPopulity.topRated} title={"Top rated"}/>
    </>
  )
}
export default MoviesPopulity;