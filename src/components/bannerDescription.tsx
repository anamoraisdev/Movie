import { useEffect, useState } from "react"
import { PropsMovieSerie } from "../interfaces/movieSerie"
import { Details } from "../interfaces/details"
import service from "../utils/services/service"

const DescriptionBanner = ({ item }: PropsMovieSerie) => {
    const [info, setInfo] = useState<Details>()
    const description: string = item?.overview.substring(0, 100) as string

    const tagMovie = "m"
    const tagSerie = "s"
 



    useEffect(() => {
        if (item && item?.isMovie && item.id) {
            service.searchDetails(tagMovie, item?.id, setInfo)
        } else if(item && item.id) {
            service.searchDetails(tagSerie, item?.id, setInfo)
        }

    }, [item])


    return (

        <div className="flex flex-col w-[50%]">
            <div className="flex justify-between">
                <h1 className="font-bold">{item?.name}</h1>

                <p>{info?.status}</p>


            </div>
            {item?.isMovie ?
                <div className="flex gap-2">
                    <p>{item?.release} | </p>
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