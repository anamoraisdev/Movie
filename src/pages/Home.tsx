
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Carrosel from "../components/carrosel";
import ScrollCard from "../components/scrollCard";
import { MoviesPopulityState, searchMoviesPopulity } from "../redux/movies/populity/slicer";
import { searchSeriesPopulity, seriesPopulityState } from "../redux/series/slicer";

const Home = () => {
  const moviesPopulity: MoviesPopulityState = useAppSelector(state => state.moviesPopulity)
  const seriesPopulity: seriesPopulityState = useAppSelector(state => state.seriesPopulity)

  return (
    <>
      <div className="w-[100%]">
        <Carrosel itens={moviesPopulity.moviesAllDay} title={"Movies Populity today"} />
        <ScrollCard itens={moviesPopulity.nowPlaying} title={"Now playing"} />
        <ScrollCard itens={seriesPopulity.AllDay} title="Series populity today" />
      </div>
    </>
  )
}
export default Home;