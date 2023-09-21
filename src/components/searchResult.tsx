
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import Card from "./card"
import { searchMovies } from "../redux/slicers/searchMoviesSlicer"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"


const SearchResultView = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector(state => state.movies.id)
  const movies = useAppSelector(state => state.movies)
  const type = useAppSelector(state => state.movies.type)
  const name = useAppSelector(state => state.movies.name)
  const pageAtualRedux = useAppSelector(state => state.movies.pageAtual)
  const isFiltering = useAppSelector(state => state.movies.isFiltering)
  const isMovie = useAppSelector(state => state.movies.isMovieOrSerie)
  let pageAtual = pageAtualRedux
  
  const totalPagesAtTime = 10
  const arrayPagesComplet= Object.keys(new Array(movies.totalPages).fill(null)).map(Number)
  const [arrayPages, setArrayPages] = useState<number[]>(arrayPagesComplet.slice(1, 11))

  const [initialNext, setInitialNext] = useState(11)
  const [finalNext, setFinalNext] = useState(initialNext + totalPagesAtTime)
  const [limitPageNext, setlimitPageNext] = useState(10)

  const [limitPagePrevius, setlimitPagePrevius] = useState<number>(11)
  const [initialPrevius, setInitialPrevius] = useState<number>(initialNext - 10)
  const [finalPrevius, setFinalPrevius] = useState<number>(initialNext)


  const getMoviesNextPage = () => {
    if(pageAtual){
      const pageCorrect = pageAtual += 1
      const info = { pageCorrect: pageCorrect, name: name,id: id, isFiltering: isFiltering, type: type, isMovieOrSerie: isMovie}
      dispatch(searchMovies(info))
      calculatePagination(pageCorrect)
    }
  }
  
  const getMoviesPreviusPage = () => {
    if(pageAtual){
      const pageCorrect = pageAtual -= 1
      const info = {pageCorrect: pageCorrect,name: name,id: id,isFiltering: isFiltering,type: type,isMovieOrSerie: isMovie}
      dispatch(searchMovies(info))
      calculatePagination(pageCorrect)
    }
  }
  
  const getMoviesPageClick = (page: number) => {
    const info = {pageCorrect: page, name: name,id: id,isFiltering: isFiltering,type: type,isMovieOrSerie: isMovie}
    dispatch(searchMovies(info))
  }

  const calculatePagination = (pageCorrect: number) => {
    if(pageCorrect && pageCorrect === limitPageNext + 1){
      returnNewArrayPages(initialNext, finalNext)
      returnValuesAfterAdvancing(initialNext, finalNext)
    }else if(pageCorrect === limitPagePrevius - 1){
      returnNewArrayPages(initialPrevius, finalPrevius)
      returnValuesAfterReturning(initialNext, initialPrevius, finalNext)
    }
  }

  const returnNewArrayPages = (initial: number, final: number) => {
    setArrayPages(arrayPagesComplet.slice(initial, final))
  }

  const returnValuesAfterReturning = (initialNext: number, initialPrevius: number, finalNext: number) => {
    setInitialNext(initialNext - totalPagesAtTime)
    setFinalNext(finalNext - totalPagesAtTime)
    setlimitPageNext(limitPageNext - totalPagesAtTime)

    setlimitPagePrevius(initialPrevius)
    setInitialPrevius(initialPrevius - totalPagesAtTime)
    setFinalPrevius(initialPrevius)
  }

  const returnValuesAfterAdvancing = (initialNext: number, finalNext: number) => {
    setlimitPagePrevius(initialNext)
    setInitialPrevius(initialNext - totalPagesAtTime)
    setFinalPrevius(initialNext)
  
    setInitialNext(initialNext + totalPagesAtTime)
    setFinalNext(finalNext + totalPagesAtTime)
    setlimitPageNext(limitPageNext + totalPagesAtTime)
 
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
                {arrayPages && arrayPages.map((page) => 
                  
                  <button className={`bg-gray-700 px-2 rounded ${pageAtualRedux === page ? "bg-green-400" : ""}`} onClick={() => getMoviesPageClick(page)}>{page}</button>
                
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