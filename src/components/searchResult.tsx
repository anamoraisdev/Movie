
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import Card from "./card"
import { searchMovies } from "../redux/slicers/searchMoviesSlicer"

const SearchResultView = () => {
 const dispatch = useAppDispatch()
  const movies = useAppSelector(state => state.movies.movies)
  const pageAtualRedux = useAppSelector(state => state.movies.pageAtual)
  const isFiltering = useAppSelector(state => state.movies.isFiltering)
  const type = useAppSelector(state => state.movies.type)
  const name = useAppSelector(state => state.movies.name)
  const id = useAppSelector(state => state.movies.id)
  const isMovie = useAppSelector(state => state.movies.isMovieOrSerie)


  let pageAtual = pageAtualRedux

  const getMoviesNextPage = () => {
    console.log("page atual", pageAtual)
    const pageCorrect = pageAtual += 1
    const info = {
      pageCorrect: pageCorrect,
      name: name,
      id: id,
      isFiltering: isFiltering,
      type: type,
      isMovieOrSerie: isMovie
  
    }
    dispatch(searchMovies(info))
  
  }

  const getMoviesPreviusPage = () => {
    console.log("page atual", pageAtual)
    const pageCorrect = pageAtual -= 1
    const info = {
      pageCorrect: pageCorrect,
      name: name,
      id: id,
      isFiltering: isFiltering,
      type: type,
      isMovieOrSerie: isMovie
    }
    dispatch(searchMovies(info))
  }


  return (
    <>
    {movies && 
    <div>

      <div className="flex flex-wrap gap-4 w-full">
        {movies?.map((movie) => (
          <div className="mt-6" key={movie.id}>
            <Card key={movie?.id} item={movie} />
          </div>
        )
        )}
      </div>
      <div className="flex justify-center gap-2 mt-12">
        {pageAtualRedux === 1 ? 
          <button className="bg-gray-800 px-2 rounded " disabled onClick={() => getMoviesPreviusPage()}>previus</button>
        : 
        <button className="bg-gray-700 px-2 rounded"  onClick={() => getMoviesPreviusPage()}>previus</button>
        }
        <button className="bg-gray-700 px-2 rounded" onClick={() => getMoviesNextPage()} >next</button>
      </div>
    </div>
    
    }
    </>
  )
}

export default SearchResultView;