
import { useEffect, useState } from "react"
import Card from "../components/card"
import { useAppDispatch, useAppSelector } from "../redux/useRedux"
import favorite, { filterFavoriteForGenre } from "../redux/slicers/favorite"
import AvisoFavorito from "../components/avisoFavorito"

const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites)
  const dispatch = useAppDispatch()
  const [typeSelect, setTypeSelect] = useState<string>("all")


  const checkSelect = () => {
    if (typeSelect === "movie") {
      dispatch(filterFavoriteForGenre(typeSelect))

    } else if (typeSelect === "serie") {

      dispatch(filterFavoriteForGenre(typeSelect))
    }
  }

  useEffect(() => {
    checkSelect()
  }, [typeSelect])

  return (
    <div className="m-0 flex flex-col">
      <h1 className="font-bold text-2xl mb-2">Favorites 🫰</h1>


      <div className="flex gap-4 items-center text-sm text-slate-400 ">
        <p className="text-sm">search for:</p>
        <button onClick={() => setTypeSelect("all")} className={`bg-gray-800 px-3 py-1 rounded-md ${typeSelect === "all" ? "bg-slate-600" : ""}`}>all</button>
        <button onClick={() => setTypeSelect("movie")} className={`bg-gray-800 px-3 py-1 rounded-md ${typeSelect === "movie" ? "bg-slate-600" : ""}`} >movie</button>
        <button onClick={() => setTypeSelect("serie")} className={`bg-gray-800 px-3 py-1 rounded-md ${typeSelect === "serie" ? "bg-slate-600" : ""}`}>serie</button>
      </div>

      {typeSelect === "movie" && favorites.filteredMovies.length <= 0 &&
        <AvisoFavorito />
      }

      {typeSelect === "serie" && favorites.filteredSeries.length <= 0 &&
        <AvisoFavorito />
      }

      {typeSelect === "all" && favorites.all.length <= 0 &&
        <AvisoFavorito />
      }
      {
        favorites.all.length > 0 &&
        <div className="grid grid-cols-7 gap-5 mt-6 justify-center">

          {typeSelect === "all" && favorites.all.map((favorite) =>

            <div className="mt-6">
              <Card item={favorite} />
            </div>


          )}

          {typeSelect === "movie" && favorites.filteredMovies.length > 0 && favorites.filteredMovies.map((favorite) =>

            <div className="mt-6">
              <Card item={favorite} />
            </div>

          )}

          {typeSelect === "serie" && favorites.filteredSeries.length > 0 && favorites.filteredSeries.map((favorite) =>
            <div className="mt-6">
              <Card item={favorite} />
            </div>
          )}
        </div>



      }
    </div>
  )
}

export default Favorites;
