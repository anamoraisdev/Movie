import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Details } from "../interfaces/details"
import { Credit } from "../interfaces/response"
import service from "../utils/services/service"
import ScrollCard from "../components/scrollCard"
import { MovieSerie } from "../interfaces/movieSerie"
import profile from '../utils/assets/profile.jpg'

const Item = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const tag = id?.substring(0, 1) as string
    const [item, setItem] = useState<Details>()
    const [credits, setCredits] = useState<Credit[]>()
    const [recommendations, setRecommendations] = useState<MovieSerie[]>()
    const id_formatTag = id?.slice(1)
    const id_format = Number(id_formatTag)

    useEffect(() => {
        if (tag && id_format) {
            service.searchDetails(tag, id_format, setItem)
            service.getCredits(tag, id_format, setCredits)
        }
    }, [id])

    useEffect(() => {
        service.getRecommendations(tag, id_format, setRecommendations)

    }, [id])

    return (
        <>
        
            {item &&

                <div className="flex flex-col lg:flex-row xl:flex-row gap-10 mt-2 lg:h-[50rem] xl:[50rem]">

                    <section className="flex flex-col gap-4 w-full lg:w-[40%] xl:w-[40%]">
                        <figure className="w-full h-full ">
                            <img className="object-cover rounded-2xl w-full h-full" src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                        </figure>
                    </section>

                    <section className="w-full lg:w-[60%] xl:w-[60%] flex flex-col gap-4 mr-10">
                        <header>
                            <div className="flex justify-between items-center gap-6">
                                <h1 className="font-bold text-2xl">{item.name}</h1>
                                <p className="text-center rounded-2xl bg-gray-700 py-1 px-3 text-sm">{item.status}</p>
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

                        <main className="flex flex-col gap-4">

                            <article className={`${item.overview.length > 500 ? "h-auto mb-4" : "h-[9.7rem]"}`}>
                                <p>{item?.overview}</p>
                            </article>

                            <section>
                                <h3 className="font-bold text-medium ">Production companies</h3>
                                <div className=" h-[100px] w-full mb-4">
                                    <div className="flex justify-start flex-wrap gap-4" >
                                        {item?.production_companies.map((i, index) => {
                                            const isRender = index < 5
                                            if (isRender)
                                                return (
                                                    <div key={i.id} className="flex gap-1 bg-gray-800 rounded-md p-2 max-w-[200px] min-w-[100px]">
                                                        <p className="truncate">{i.name}</p>
                                                        <p className="text-sm rounded bg-gray-600 px-2">{i.origin_country}</p>
                                                    </div>
                                                )

                                        }

                                        )}
                                    </div>

                                </div>
                            </section>

                            <section className="h-[110px]">
                                <h3 className="text-medium font-bold ">Statistic <span className="text-gray-500">#{item.name}</span></h3>
                                <table className=" w-full">
                                    <thead>
                                        <tr className="text-center rounded-lg ">
                                            <th className="bg-gray-800  rounded-lg hover:bg-gray-900">buget</th>
                                            <th className="bg-gray-800  rounded-lg hover:bg-gray-900">revenue</th>
                                            <th className="bg-gray-800  rounded-lg hover:bg-gray-900">vote average</th>
                                            <th className="bg-gray-800  rounded-lg hover:bg-gray-900">vote count</th>
                                            <th className="bg-gray-800  rounded-lg hover:bg-gray-900">populity</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr className="text-center rounded-lg">
                                            <td className="bg-gray-600  rounded-lg ">{item.budget ? `${item.budget}` : "-"}</td>
                                            <td className="bg-gray-600 rounded-lg ">{item.revenue ? `${item.revenue}` : "-"}</td>
                                            <td className="bg-gray-600  rounded-lg ">{item.average ? `${item.average}` : "-"}</td>
                                            <td className="bg-gray-600 rounded-lg ">{item.count ? `${item.count}` : "-"}</td>
                                            <td className="bg-gray-600  rounded-lg ">{item.popularity ? `${item.popularity}` : "-"}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </section>

                            <section>
                                <h1 className="font-bold text-medium mb-2">Elenco</h1>
                                <div className={` ${credits && credits.length > 5 ? "h-[200px] p-2 " : ""} bg-gray-800 rounded-md`}>
                                    <div className={`flex ${credits && credits?.length > 5 ? "overflow-x-scroll" : ""} gap-3`}>
                                        {credits && credits?.map((credit, index) => {
                                            const isRender = index <= 10
                                            if (isRender)
                                                return (
                                                    <div onClick={() => navigate(`/person/${credit.id}`)} key={credit.id} className={`${credits && credits.length > 5 ? "h-[200px] p-2" : "p-2"} `}>
                                                        <img className="object-cover min-w-[8rem] max-h-[8rem] rounded-md" src={`${credit?.profile_path ? `https://image.tmdb.org/t/p/w500/${credit?.profile_path}` : `${profile}`}`} />
                                                        <div className="w-[90px]">
                                                            <p className="text-sm truncate">{credit.name}</p>
                                                            <p className="truncate text-sm">{credit.character}</p>
                                                        </div>
                                                    </div>
                                                )
                                        })}
                                    </div>
                                </div>
                            </section>
                        </main>
                    </section>
                </div >


            }
            {recommendations && recommendations.length > 0 && 
                <section className="mt-10">
                    <div className="flex gap-4">
                        <h1 className="text-2xl">Ja que buscou por </h1>
                        <div className="flex gap-3 justify-center flex-wrap">
                            {item?.genres.map((gender) => <button key={gender.id} className="border border-white rounded-lg p-2 hover:bg-white hover:text-gray-900">{gender.name}</button>)}
                        </div>

                    </div>
                    <ScrollCard title="Recommendations" itens={recommendations} />
                </section>
            
            }
        </>

    )
}

export default Item;