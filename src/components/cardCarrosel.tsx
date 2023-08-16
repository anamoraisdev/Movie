import { useEffect, useState } from "react"
import { PropsMovie } from "../interfaces/movie"
import axios from "axios"
import { optionsRequest } from "../app/service"



const CardCarrosel = ({ item }: PropsMovie) => {
    const [movie, setMovie] = useState()
    const description = item.overview.substring(0, 100)
    
    const getDetailsMovie = async () => {
        if (item.id !== null) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${item?.id}`, optionsRequest)
                const data = response.data;
                console.log(data)
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
        <>
          
                <div className="relative">
                    <div className="relative w-[600px]">
                        <img className=" opacity-40 relative rounded-lg w-full" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} />
                    </div>
                    <div className="absolute top-[10%] left-[8%]">
                        <img className=" w-44 rounded-xl shadow-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                    </div>
                    <div className="absolute top-[10%] right-[20%] w-[250px]">
                        <h1 className="font-bold">{item?.title || item?.original_title}</h1>
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <p>{item?.release_date} | </p> 
                                <p>{item?.media_type} | </p>
                                <p>{movie?.runtime} min</p>
                            </div>
                           
                            <p>{description}...</p>
                            
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-wrap gap-2 ">
                                {movie && movie?.genres?.map((gen) =>
                                    <button className="bg-three bg-three p-1">{gen?.name}</button>
                                )}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            
        </>

    )
}

export default CardCarrosel;