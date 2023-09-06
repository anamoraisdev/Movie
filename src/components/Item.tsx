import { useParams } from "react-router-dom"
import { optionsRequest } from "../redux/service"
import axios from "axios"
import { useEffect, useState } from "react"
import { Details, MovieDetailsApi, SerieDetailsApi } from "../interfaces/details"

export interface ResponseMoviesDetails {
    data: MovieDetailsApi
}

export interface ResponseSerieDetails {
    data: SerieDetailsApi
}

const Item = () => {

    const { id } = useParams()
    const tag = id?.substring(0, 1)
    const [item, setItem] = useState<Details>()
    const [credits, setCredits] = useState()
    const id_formatTag = id?.slice(1)
    const id_format = Number(id_formatTag)


    
    const searchTitle = async () => {
        if (tag === "m") {
            try {
                const response: ResponseMoviesDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}`, optionsRequest)
                const item = response.data

                const itemFormat: Details = {
                    id: item.id,
                    name: item.title,
                    original_name: item.original_title,
                    genres: item.genres,
                    overview: item.overview,
                    popularity: item.popularity,
                    poster: item.poster_path,
                    production_companies: item.production_companies,
                    budget: item.budget,
                    homepage: item.homepage,
                    revenue: item.revenue,
                    average: item.vote_average,
                    count: item.vote_count,
                    runtime: item.runtime,
                    release: item.release_date,
                    status: item.status,
                    tagline: item.tagline,
                    seasons: undefined,
                    last_air_date: undefined,
                    number_of_episodes: undefined,
                    number_of_seasons: undefined,
                    last_episode_to_air: undefined
                }
                setItem(itemFormat)
            } catch (error) {
                console.log(error)
            }

        } else if (tag === "s") {
            try {
                const response: ResponseSerieDetails = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}`, optionsRequest)
                const item = response.data

                const itemFormat: Details = {
                    id: item.id,
                    name: item.name,
                    original_name: item.original_name,
                    genres: item.genres,
                    overview: item.overview,
                    popularity: item.popularity,
                    poster: item.poster_path,
                    production_companies: item.production_companies,
                    budget: item.budget,
                    homepage: item.homepage,
                    revenue: undefined,
                    average: item.vote_average,
                    count: item.vote_count,
                    runtime: undefined,
                    release: undefined,
                    status: item.status,
                    tagline: item.tagline,
                    seasons: item.seasons,
                    last_air_date: item.last_air_date,
                    number_of_episodes: item.number_of_episodes,
                    number_of_seasons: item.number_of_seasons,
                    last_episode_to_air: item.last_episode_to_air,
                }

                setItem(itemFormat)

            } catch (error) {
                console.log(error)
            }
        }
    }

    const getCredits = async () => {
        if (tag === "m") {
            try {
                const response: ResponseDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}/credits`, optionsRequest)
                const data = response.data
                console.log(data)
                setCredits(data)
            } catch (error) {
                console.log(error)
            }

        } else if (tag === "s") {
            try {
                const response: ResponseDetails = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}/credits`, optionsRequest)
                const data = response.data
                setCredits(data)
                console.log("serie:", data)

            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        searchTitle()
        getCredits()
    }, [id])



    return (
        <>
            {item &&

                <div className="flex gap-10 mt-8">


                    <div className="flex flex-col gap-4 ">
                        <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                        <div className="flex gap-3 justify-center flex-wrap">
                            {item?.genres.map((gender) => <button className="border border-white rounded-lg p-2 hover:bg-white hover:text-slate-900">{gender.name}</button>)}
                        </div>
                    </div>


                    <div className="w-[60%] flex flex-col gap-4">
                        <header>
                            <div className="flex justify-between items-center gap-6">
                                <h1 className="font-bold text-2xl">{tag === "s" ? item?.name : item?.original_name}</h1>
                                <p className="text-center rounded-2xl bg-slate-700 py-1 px-3 text-sm">{item.status}</p>
                            </div>
                            {item.tagline !== "" &&
                                <p className="text-gray-500">#{item?.tagline}</p>
                            }

                            {tag === "m" &&
                                <div className="flex gap-2">
                                    <p>{item?.release} |</p>
                                    <p>{tag === "m" ? "Movie" : "Serie"} |</p>
                                    <p>{item?.runtime}m</p>
                                </div>
                            }
                        </header>

                        <p>{item?.overview}</p>

                        <h3 className="font-bold text-medium">Production companies</h3>
                        <div className="flex justify-start flex-wrap gap-4" >
                            {item?.production_companies.map((i) =>
                                <div className="flex gap-1 bg-slate-800 rounded-md p-2">
                                    <p>{i.name}</p>
                                    <p className="text-sm rounded bg-slate-600 px-2">{i.origin_country}</p>
                                </div>
                            )}
                        </div>
                        <h3 className="text-medium font-bold">Statistic <span className="text-slate-500">#{item.name}</span></h3>

                        <table className=" w-full">
                            <thead className="text-center rounded-lg ">
                                <th className="bg-slate-800  rounded-lg hover:bg-slate-900">buget</th>
                                <th className="bg-slate-800  rounded-lg hover:bg-slate-900">revenue</th>
                                <th className="bg-slate-800  rounded-lg hover:bg-slate-900">vote average</th>
                                <th className="bg-slate-800  rounded-lg hover:bg-slate-900">vote count</th>
                                <th className="bg-slate-800  rounded-lg hover:bg-slate-900">populity</th>
                            </thead>
                            <tbody className="text-center rounded-lg">
                                <td className="bg-slate-600  rounded-lg ">{item.budget ? `${item.budget}` : "-"}</td>
                                <td className="bg-slate-600 rounded-lg ">{item.revenue}</td>
                                <td className="bg-slate-600  rounded-lg ">{item.average}</td>
                                <td className="bg-slate-600 rounded-lg ">{item.count}</td>
                                <td className="bg-slate-600  rounded-lg ">{item.popularity}</td>
                            </tbody>


                        </table>


                        <h1 className="font-bold text-medium">Elenco</h1>
                        <div className="flex overflow-x-scroll gap-3">
                            {credits && credits?.cast.map((credit, index) => {
                                const isRender = index <= 10
                                if (isRender)
                                    return (
                                        <div className="h-[200px]">
                                            <img className="object-cover min-w-[8rem] max-h-[8rem]" src={`https://image.tmdb.org/t/p/w500/${credit?.profile_path}`} />
                                            <div className="w-[90px]">
                                                <p className="text-sm truncate">{credit.name}</p>
                                                <p className="truncate text-sm">{credit.character}</p>
                                            </div>
                                        </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>


            }
        </>

    )
}

export default Item;