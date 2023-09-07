import axios from "axios"
import { useEffect, useState } from "react"
import { optionsRequest } from "../redux/service"
import { PropsMovieSerie } from "../interfaces/movieSerie"
import { ResponseMovieDetails, ResponseSerieDetails } from "./Item"

export interface InfoMovie {
    runtime: string,
    status: string
}

export interface InfoSerie {
    air_date: number,
    seasons: number,
    episodes: number,
    status: string,
}

const DescriptionBanner = ({ item }: PropsMovieSerie) => {
    const [infoMovie, setInfoMovie] = useState<InfoMovie>()
    const [infoSerie, setInfoSerie] = useState<InfoSerie>()
    const description: string = item?.overview.substring(0, 100)

    const getDetailsMovie = async () => {
        if (item.isMovie && item.id !== null) {
            try {
                const response: ResponseMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response.data
                const dataFormat = {
                    runtime: data.runtime,
                    status: data.status
                }
                setInfoMovie(dataFormat)
            } catch (error) {
                console.log(error)
            }

        } else if (!item.isMovie && item.id) {
            try {
                const response: ResponseSerieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response.data
                const dataFormat = {
                    air_date: data.last_air_date,
                    seasons: data.number_of_seasons,
                    episodes: data.number_of_episodes,
                    status: data.status
                }
                setInfoSerie(dataFormat)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getDetailsMovie()

    }, [item.id])


    return (

        <div className="flex flex-col w-[50%]">
            <div className="flex justify-between">
                <h1 className="font-bold">{item.name || item?.original_name}</h1>
                {item.isMovie ?
                    <p>{infoMovie?.status}</p>
                :
                    <p>{infoSerie?.status}</p>
                }
            </div>
            {item.isMovie ?
                <div className="flex gap-2">
                    <p>{item?.release} | </p>
                    <p>{infoMovie?.runtime} min</p>
                </div>
                :
            ''
            }

            <p>{description}...</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4 mt-4 ">
                    {item.genres?.map((gen) =>
                        <button key={gen.id} className="rounded-lg border p-1 hover:bg-slate-100 hover:text-slate-700 ">{gen?.name}</button>
                    )}
                </div>
            </div>

        </div>

    )
}

export default DescriptionBanner;