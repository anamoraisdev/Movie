import { useState } from "react"
import { useAppSelector } from "../redux/hooks"
import Card from "./card"

const SearchResultView = () => {
    const movies = useAppSelector(state => state.movies.movies)
    const pageAtual = useAppSelector(state => state.movies.pageAtual)
    const [nextPage, setNextPage] = useState<number| undefined>()
    const [previusPage, setPreviusPage] = useState<number| undefined>()


    const getNextPage = () => {
      if(pageAtual){
        const page =  pageAtual + 1
        setNextPage(page)
      }
    }

    const getPreviusPage = () => {
      if(pageAtual){
        const page = pageAtual - 1
        setPreviusPage(page)
      }
    }

    return (
        <div className="flex flex-wrap gap-4 w-full">
            {movies?.map((movie) => (
              <div className="mt-6" key={movie.id}>
                <Card key={movie?.id} item={movie} />
              </div>
            )
            )}
            <button> Ver Mais</button>
          </div>
    )
}

export default SearchResultView;