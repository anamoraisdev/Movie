
import { PropsMovie } from "../interfaces/movie"

import DescriptionBanner from "./bannerDescription"



const CardCarrosel = ({ item }: PropsMovie) => {
    return (
     

            <div className="relative">
                <div className="w-[600px]">
                    <img className=" opacity-40 rounded-lg w-full " src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} />
                </div>
                <div className="absolute flex gap-10 top-[10%] left-[8%]">
                    <img className=" w-44 rounded-xl shadow-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                    <DescriptionBanner key={item.id} item={item}/>
                </div>
                
            </div>



   

    )
}

export default CardCarrosel;