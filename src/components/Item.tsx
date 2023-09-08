import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Details} from "../interfaces/details"
import { Credit} from "../interfaces/response"
import service from "../service"

const Item = () => {
    const { id } = useParams()
    const tag = id?.substring(0, 1)
    const [item, setItem] = useState<Details>()
    const [credits, setCredits] = useState<Credit[]>()
    const id_formatTag = id?.slice(1)
    const id_format = Number(id_formatTag)



    useEffect(() => {
        if(tag && id_format){
            service.searchDetails(tag, id_format, setItem)
            service.getCredits(tag, id_format, setCredits)
        }
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
                            {credits && credits?.map((credit, index) => {
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