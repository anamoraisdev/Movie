
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import Card from "./card"
import { searchMovies } from "../redux/slicers/searchMoviesSlicer"
import { BiSearch } from "react-icons/bi"


const SearchResultView = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(state => state.movies)
  const pageAtualRedux = useAppSelector(state => state.movies.pageAtual)
  const isFiltering = useAppSelector(state => state.movies.isFiltering)
  const isMovie = useAppSelector(state => state.movies.isMovieOrSerie)
  const type = useAppSelector(state => state.movies.type)
  const name = useAppSelector(state => state.movies.name)
  const id = useAppSelector(state => state.movies.id)
  let pageAtual = pageAtualRedux
  let arrayNextPages = Object.keys(new Array(movies.totalPages).fill(null)).map(Number)
  arrayNextPages = arrayNextPages.splice(1, 10)

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

  const getMoviesPageClick = (page: number) => {

    const info = {
      pageCorrect: page,
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
        <div className="flex flex-col gap-4">
          <article>
            <h1 className="text-2xl font-bold">Resultado</h1>
            <h2 className="flex items-center gap-2 text-xl"><span><BiSearch /></span>{movies.totalResults} {movies.isMovieOrSerie ? "filmes" : "series"} encontrados na sua busca</h2>
          </article>

          <div className="flex flex-wrap gap-6 w-full">
            {movies.movies?.map((movie) => (
              <div className="mt-8" key={movie.id}>
                <Card key={movie?.id} item={movie} />
              </div>
            )
            )}
          </div>
         
            <div className="flex justify-center gap-2 mt-12">
              {pageAtualRedux === 1 ?
                <button className="bg-gray-800 px-2 rounded " disabled onClick={() => getMoviesPreviusPage()}>previus</button>
                :
                <button className="bg-gray-700 px-2 rounded" onClick={() => getMoviesPreviusPage()}>previus</button>
              }

              <div className="flex gap-2">
                {arrayNextPages && arrayNextPages.map((page, index) => 
                  <button className={`bg-gray-700 px-2 rounded ${pageAtualRedux === page ? "bg-gray-600" : ""}`} onClick={() => getMoviesPageClick(page)}>{page}</button>
                )}
              </div>
              <button className="bg-gray-700 px-2 rounded" onClick={() => getMoviesNextPage()} >next</button>
            </div>

          
        </div>

      }
    </>
  )
}

export default SearchResultView;