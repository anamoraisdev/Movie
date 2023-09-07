import axios from "axios"
import { useEffect, useState } from "react"
import { optionsRequest } from "../redux/service"
import { PropsMovieSerie } from "../interfaces/movieSerie"
import { ResponseMovieDetails, ResponseSerieDetails } from "./Item"
import { Genre } from "../interfaces/genre"

export interface Info {
    runtime: string | undefined
    seasons: number | undefined
    episodes: number | undefined
    status: string 
    genres: Genre[]
    release: number | string
}

const DescriptionBanner = ({ item }: PropsMovieSerie) => {
    const [info, setInfo] = useState<Info>()

    const description: string = item?.overview.substring(0, 100)

    const getDetailsMovie = async () => {
        if (item.isMovie && item.id !== null) {
            try {
                const response: ResponseMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response.data
         
                const dataFormat = {
                    runtime: data.runtime,
                    status: data.status,
                    genres: data.genres,
                    
                    seasons: undefined,
                    episodes: undefined,
                    release: data.release_date,

                }

                setInfo(dataFormat)
            } catch (error) {
                console.log(error)
            }

        } else{
            try {
                const response: ResponseSerieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response.data
                const dataFormat = {
             
                    seasons: data.number_of_seasons,
                    episodes: data.number_of_episodes,
                    status: data.status,
                    genres: data.genres,
                    runtime: undefined,
                    release: data.last_air_date
                }
                setInfo(dataFormat)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getDetailsMovie()

    }, [item])


    return (

        <div className="flex flex-col w-[50%]">
            <div className="flex justify-between">
                <h1 className="font-bold">{item.name || item?.original_name}</h1>
              
                <p>{info?.status}</p>
              

            </div>
            {item.isMovie ?
                <div className="flex gap-2">
                    <p>{info?.release} | </p>
                    <p>{info?.runtime} min</p>
                </div>
                :
                ''
            }

            <p>{description}...</p>

            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4 mt-4 ">
                    {info && info?.genres?.map((gen) =>
                        <button key={gen.id} className="rounded-lg border p-1 hover:bg-slate-100 hover:text-slate-700 ">{gen?.name}</button>
                    )}
                </div>
            </div>

        </div>

    )
}

export default DescriptionBanner;