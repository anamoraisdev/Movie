import { useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";

const MoviesPopulity = () => {
  const moviesPopulity = useAppSelector(state => state.moviesPopulity)
  return (
    <>
      <Carrosel itens={moviesPopulity.moviesAllDay}/>
      <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing"}/>
      <ScrollCard itens={moviesPopulity.topRated} title={"Top rated"}/>
    </>
  )
}
export default MoviesPopulity;