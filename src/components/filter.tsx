import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchGenres } from "../redux/genres/slicer"
import { searchMovies } from "../redux/movies/renderMovies/slicer"
import { Genre } from "../interfaces/genre"
import { PropsFilter } from "../app/service"



const Filter = () => {
    const dispatch = useAppDispatch()
    const [genre, setGenre] = useState()
    const [name, setName] = useState<string>("")
    const genres: Genre[] = useAppSelector(state => state.genres.genres)

    const filterMovies = () => {
      const id = formatGenre();
      const info: PropsFilter = {
        id: id,
        type: "filter"
      }
      dispatch(searchMovies(info))
    }

    const searchMoviesForName = () => {
        const info: PropsFilter = {
            name: name,
            type: "search"
        }
        dispatch(searchMovies(info))
    }

    const formatGenre = () => {
        const genre_id = genres.find((item) => item.name === genre)
        const id = genre_id?.id
        return id
    }

    useEffect(() => {
        dispatch(searchGenres())
    }, [dispatch])

    useEffect(() => {
        searchMoviesForName()
    },[name])

 
    return (
        <div className="flex justify-between gap-2 text-gray-700 w-[70%]">
            <div className="flex gap-3 text-gray-100">
                <a href="/home">
                    <button className="bg-gray-800 px-3 py-1 rounded-md">home</button>
                </a>
                <a href="/movies">
                    <button className="bg-gray-800 px-3 py-1 rounded-md">movies</button>

                </a>
                <a href="/series">
                    <button className="bg-gray-800 px-3 py-1 rounded-md">series</button>

                </a>
            </div>
            <div className="flex gap-2">
                <input className="rounded-md px-4" placeholder="digite o nome" value={name} onChange={(event) => setName(event.target.value)}></input>
                <select className="px-8 rounded text-gray-700" value={genre} onChange={(event) => setGenre(event.target.value)}>
                    {genres.map((gender) =>
                        <option key={gender.id}>{gender.name}</option>
                    )}
                </select>
                <button className="bg-slate-700 hover:bg-slate-500 text-gray-100 px-4 rounded-lg" onClick={() => filterMovies()}>Filter</button>
            </div>
        </div>
    )
}
export default Filter 