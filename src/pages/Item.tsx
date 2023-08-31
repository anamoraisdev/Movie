import { useParams } from "react-router-dom"
import { ResponseDetails, optionsRequest } from "../app/service"
import axios from "axios"
import { useEffect, useState } from "react"

import { SerieDetails } from "../interfaces/serie"
import { MoviesDetails } from "../interfaces/movie"

const Item = () => {

    const { id } = useParams()
    const tag = id?.substring(0, 1)
    const [item, setItem] = useState<SerieDetails | MoviesDetails>()


    const searchTitle = async () => {
        const id_formatTag = id?.slice(1)
        const id_format = Number(id_formatTag)
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

    useEffect(() => {
        searchTitle()
    }, [id])

    return (
        <div className="">
         

        </div>
    )
}

export default Item;