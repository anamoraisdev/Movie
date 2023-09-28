import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux"
import { Genre } from "../interfaces/genre"
import { useNavigate } from "react-router-dom"
import { searchResultTitles } from "../redux/slicers/searchMoviesSlicer"



const Filter = () => {
    const dispatch = useAppDispatch()
    const [type, setType] = useState<string>("movie")
    const [name, setName] = useState<string>()
    const [isFiltering, setIsFiltering] = useState<boolean>(false)
    const genres: Genre[] = useAppSelector(state => state.genres)
    const [genre, setGenre] = useState<string>("Action")
    const navigate = useNavigate()


    const filterMovies = () => {
        const id = formatGenre();
        if (isFiltering) {
            setIsFiltering(false)
            const infoRefresh = { id: id, searchModel: "filter", isFiltering: false, pageCorrect: 1, isMovieOrSerie: type }
            dispatch(searchResultTitles(infoRefresh))
        } else {
            setIsFiltering(true)
            const info = { id: id, searchModel: "filter", isFiltering: true, pageCorrect: 1, isMovieOrSerie: type }
            dispatch(searchResultTitles(info))
        }
    }

    const searchMoviesForName = () => {
        console.log("name :", name)
        const info = {
            name: name,
            searchModel: "search",
            isFiltering: undefined,
            isMovieOrSerie: type,
        }
        dispatch(searchResultTitles(info))

    }

    const formatGenre = () => {
        const genre_id = genres.find((item) => item.name === genre)
        const id = genre_id?.id
        return id
    }

    useEffect(() => {
        searchMoviesForName()
    }, [name])




    return (
        <div className="flex justify-between gap-2 text-gray-700 w-[70%]">
            <div className="flex gap-3 text-gray-100">
                <a onClick={() => navigate("/")}>
                    <button className="bg-gray-800 px-3 py-1 rounded-md">home</button>
                </a>
                <a onClick={() => navigate("/movies")}>
                    <button className="bg-gray-800 px-3 py-1 rounded-md">movies</button>

                </a>
                <a onClick={() => navigate("/series")}>
                    <button className="bg-gray-800 px-3 py-1 rounded-md">series</button>

                </a>
            </div>
            <div className="flex gap-2">
                <select className="px-8 rounded text-gray-700" value={type} onChange={(event) => setType(event.target.value)}>
                    <option>movie</option>
                    <option>serie</option>
                    <option>person</option>
                </select>

                <input className="rounded-md px-4" placeholder="digite o nome" value={name} onChange={(event) => setName(event.target.value)}></input>
                {
                    type !== "person" &&

                    <select className="px-8 rounded text-gray-700" value={genre} onChange={(event) => setGenre(event.target.value)}>
                        {genres?.map((gender) =>
                            <option key={gender.id}>{gender.name}</option>
                        )}
                    </select>


                }
                {type !== "person" &&

                    <button className={`hover:bg-gray-700 text-gray-100 px-4 rounded-lg  ${isFiltering ? "bg-gray-700" : "bg-gray-800"}`} onClick={() => filterMovies()}>{isFiltering ? "refresh" : "filter"}</button>
                }
            </div>
        </div>
    )
}
export default Filter 