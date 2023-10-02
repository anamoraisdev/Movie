
import { useAppSelector } from "../utils/hooks/useRedux";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import SearchResultView from "../components/searchResult";
import { Populity } from "../redux/slicers/populitySlicer";


const Home = () => {
  const person = useAppSelector(state => state.person.person)
  const resultSearch = useAppSelector(state => state.movies.resultSearch)
 
  const moviesPopulity = useAppSelector(state => state.populity.movies) as Populity
  const seriesPopulity = useAppSelector(state => state.populity.series) as Populity


  return (
    <>
      <div className="w-[100%]">
        {!resultSearch ?
          <div>
            <Carrosel itens={moviesPopulity.topRated} title={"Top rated movies 🔥"} />
            <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing movies 🎬"} />
            <ScrollCard person={person} title={"people popularity 🎖️"} />
            <Carrosel itens={seriesPopulity.topRated} title="Top rated series 🔥" />
            <ScrollCard itens={seriesPopulity.allDay} title="Series populity today 🎖️" />
          </div>
          :
          <SearchResultView />
        }
      </div>
    </>
  )
}
export default Home;