
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux"
import Card from "./card"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import usePagination from "../utils/hooks/usePagination"
import { searchResultTitles } from "../redux/slicers/searchMoviesSlicer"
import CardPerson from "./cardPerson"
import { MovieSerie } from "../interfaces/movieSerie"



const SearchResultView = () => {
  const dispatch = useAppDispatch()
  const { calculatePagination } = usePagination()
  const resultSearch = useAppSelector(state => state.movies)
  const arrayPagesComplet = Object.keys(new Array(resultSearch.totalPages).fill(null)).map(Number)
  const [arrayPages, setArrayPages] = useState<number[]>(arrayPagesComplet.slice(1, 11))


  let pageAtual = resultSearch.pageAtual


  const getResultSearchNextPage = () => {
    if (pageAtual) {
      const pageCorrect = pageAtual += 1
      const infoPagination = { pageCorrect: pageCorrect, arrayPagesComplet: arrayPagesComplet, setArrayPages: setArrayPages }
      const infoSearch = { pageCorrect: pageCorrect, name: resultSearch.name, id: resultSearch.id, isFiltering: resultSearch.isFiltering, searchModel: resultSearch.searchModel, isMovieOrSerie: resultSearch.isMovieOrSerie }
      dispatch(searchResultTitles(infoSearch))
      calculatePagination(infoPagination)

    }
  }

  const getResultSearchPreviusPage = () => {
    if (pageAtual) {
      const pageCorrect = pageAtual -= 1
      const infoSearch = { pageCorrect: pageCorrect, name: resultSearch.name, id: resultSearch.id, isFiltering: resultSearch.isFiltering, searchModel: resultSearch.searchModel, isMovieOrSerie: resultSearch.isMovieOrSerie }
      const infoPagination = { pageCorrect: pageCorrect, arrayPagesComplet: arrayPagesComplet, setArrayPages: setArrayPages }
      dispatch(searchResultTitles(infoSearch))
      calculatePagination(infoPagination)
    }
  }

  const getResultSearchPageClick = (page: number) => {
    const info = { pageCorrect: page, name: resultSearch.name, id: resultSearch.id, isFiltering: resultSearch.isFiltering, searchModel: resultSearch.searchModel, isMovieOrSerie: resultSearch.isMovieOrSerie }
    dispatch(searchResultTitles(info))
  }

  return (
    <>
      {resultSearch.resultSearch &&
        < div className="flex flex-col gap-4">

          <article>
            <h1 className="text-2xl font-bold">Resultado</h1>
            <h2 className="flex items-center gap-2 text-xl"><span><BiSearch /></span> {resultSearch.totalResults} {resultSearch.isMovieOrSerie} encontrados na sua busca</h2>
          </article>


          <section>

            <main className="flex flex-wrap gap-6 w-full">

              {resultSearch.resultSearch && resultSearch.resultSearch.map((item) => {
                if (resultSearch.isMovieOrSerie === "person")
                  return (
                    <div className="max-w-[25rem] min-w-[25rem] p-2 bg-gray-800 rounded-2xl hover:scale-105">
                      <CardPerson person={item} />
                    </div>
                  )
                else return (
                  <div className="mt-8">
                    <Card key={item?.id} item={item} />
                  </div>
                )
              })}

            </main>

            {resultSearch.totalPages && resultSearch.totalPages > 10 &&
              <footer className="flex justify-center gap-2 mt-12">
                {pageAtual === 1 ?
                  <button className="bg-gray-800 px-2 rounded " disabled onClick={() => getResultSearchPreviusPage()}>previus</button>
                  :
                  <button className="bg-gray-700 px-2 rounded" onClick={() => getResultSearchPreviusPage()}>previus</button>
                }

                <div className="flex gap-2">
                  {arrayPages && arrayPages.map((page) =>

                    <button key={page} className={`bg-gray-700 px-2 rounded ${pageAtual === page ? "bg-green-400" : ""}`} onClick={() => getResultSearchPageClick(page)}>{page}</button>

                  )}
                </div>
                <button className="bg-gray-700 px-2 rounded" onClick={() => getResultSearchNextPage()} >next</button>
              </footer>
            }

          </section>
        </div >

      }
    </>
  )
}

export default SearchResultView;