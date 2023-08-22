import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { optionsRequest } from "../app/service"
import { Movie, PropsMovie } from "../interfaces/movie"

const DescriptionBanner = ({item}: PropsMovie) => {
    const [movie, setMovie] = useState<Movie>()
    const description: string = item?.overview.substring(0, 100)

    const getDetailsMovie = async () => {
        if (item.id !== null) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response?.data
                setMovie(data)
            } catch (error) {
                console.log(error)
            }

        }
    }

    useEffect(() => {
        getDetailsMovie()

    }, [])

    return (

        <div className="flex flex-col w-[50%]">
            <h1 className="font-bold">{item?.title || item?.original_title}</h1>
            <div className="flex gap-2">
                <p>{item?.release_date} | </p>
                <p>{item?.media_type} | </p>
                <p>{movie?.runtime} min</p>
            </div>

            <p>{description}...</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4 mt-4 ">
                    {movie && movie?.genres?.map((gen) =>
                        <button key={gen.id} className="rounded-lg border p-1 hover:bg-slate-100 hover:text-slate-700 ">{gen?.name}</button>
                    )}

                </div>
            </div>

        </div>

    )
}

export default DescriptionBanner;