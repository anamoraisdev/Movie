import { useParams } from "react-router-dom"
import { ResponseDetails, optionsRequest } from "../redux/service"
import axios from "axios"
import { useEffect, useState } from "react"

import { SerieDetails } from "../interfaces/serie"
import { MoviesDetails } from "../interfaces/movie"

const Item = () => {

    const { id } = useParams()
    const tag = id?.substring(0, 1)
    const [item, setItem] = useState<SerieDetails | MoviesDetails>()
    const [credits, setCredits] = useState()
    const id_formatTag = id?.slice(1)
    const id_format = Number(id_formatTag)

    const searchTitle = async () => {
        if (tag === "m") {
            try {
                const response: ResponseDetails = await axios.get(`https://api.themoviedb.org/3/movie/${id_format}`, optionsRequest)
                const data = response.data
                console.log(data)
                setItem(data)

            } catch (error) {
                console.log(error)
            }

        } else if (tag === "s") {
            try {
                const response: ResponseDetails = await axios.get(`https://api.themoviedb.org/3/tv/${id_format}`, optionsRequest)
                const data = response.data
                setItem(data)
                console.log("serie:", data)

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

                <div className="flex gap-10 border border-red-500">
                    <div className="flex flex-col gap-4 ">
                        <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                        <div className="flex gap-3 justify-center flex-wrap">
                                {item?.genres.map((gender) => <button className="border border-white rounded-lg p-2 hover:bg-white hover:text-slate-900">{gender.name}</button>)}
                        </div>
                    </div>
                    <div className="w-[60%] flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center gap-6">
                                <h1 className="font-bold text-2xl">{tag === "s" ? item?.name : item?.title}</h1>
                                <p className="text-center rounded-2xl bg-slate-700 py-1 px-3 text-sm">{item.status}</p>
                            </div>
                            <p className="text-gray-500">#{item?.tagline}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <p>{item?.release_date} |</p>
                                <p>{tag === "m" ? "movie" : "serie"} |</p>
                                <p>{item?.runtime}m</p>
                            </div>
        
                            <p>{item?.overview}</p>
                        </div>
                            <h3 className="text-medium font-bold">Statistic <span className="text-slate-500">#{item.title}</span></h3>
                        <div>
                            <p>buget: {item.budget}</p>
                            <p>revenue: {item.revenue}</p>
                            <p>vote average: {item.vote_average}</p>
                            <p>vote count:  {item.vote_count}</p>
                            <p>populity:  {item.popularity}</p>
                          
                        </div>
                        <h3 className="font-bold text-medium">Production companies</h3>
                        <div className="flex justify-start flex-wrap gap-4" >
                            {item?.production_companies.map((i) =>
                                <div className="flex gap-1 bg-slate-800 rounded-md p-2">
                                    <p>{i.name}</p>
                                    <p className="text-sm rounded bg-slate-600 px-2">{i.origin_country}</p>
                                </div>
                            )}
                        </div>
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