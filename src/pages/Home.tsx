
import { useAppSelector } from "../redux/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import { MoviesPopulityState, } from "../redux/slicers/moviePopulitySlicer";
import { seriesPopulityState } from "../redux/slicers/seriesPopulitySlicer";

import SearchResultView from "../components/searchResult";
import { Person } from "../interfaces/person";



const Home = () => {
  const moviesPopulity: MoviesPopulityState = useAppSelector(state => state.moviesPopulity)
  const seriesPopulity: seriesPopulityState = useAppSelector(state => state.seriesPopulity)
  const person: Person[] = useAppSelector(state => state.person.person)

  const movies = useAppSelector(state => state.movies.movies)

  return (
    <>
      <div className="w-[100%]">
        {movies !== null ?
          <SearchResultView/>
          :
          <div>
            <Carrosel itens={moviesPopulity.topRated} title={"Top rated movies 🔥"} />
            <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing movies 🎬"} />
            <ScrollCard person={person} title={"people popularity 🎖️"}/>
            <Carrosel itens={seriesPopulity.topRated} title="Top rated series 🔥" />
            <ScrollCard itens={seriesPopulity.AllDay} title="Series populity today 🎖️"/>
          </div>
        }
      </div>
    </>
  )
}
export default Home;