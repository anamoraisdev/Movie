import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { searchGenreMovies } from "../features/movies/genreMovies/slicer"
import {Genre, searchGenres} from "../features/genres/slicer"

const Filter = () => {
    const dispatch = useAppDispatch()
    const [genre, setGenre] = useState<string>()
    const genres:Genre[] = useAppSelector(state => state.genres.genres)

    const filter = () => {
        const genre_id = genres.find((item) => item.name === genre)
        const id = genre_id?.id
        dispatch(searchGenreMovies(id))
    }

    useEffect(() => {
        dispatch(searchGenres())
    }, [dispatch])

    return (
        <div className="flex justify-between gap-4">
            <div className="flex gap-4">
                <select className="px-8 rounded text-one" value={genre} onChange={(event) => setGenre(event.target.value)}>
                    {genres.map((gender) =>
                        <option key={gender.id}>{gender.name}</option>
                    )}
                </select>
                <button className="bg-three px-2 rounded" onClick={() => filter()}>filtrar</button>
            </div>
        </div>
    )
}
export default Filter 