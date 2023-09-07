import { useNavigate } from "react-router-dom";
import { PropsMovieSerie } from "../interfaces/movieSerie";
import DescriptionBanner from "./bannerDescription"



const CardCarrosel = ({ item }: PropsMovieSerie) => {
    const navigate = useNavigate()
    return (
        <a onClick={() => navigate(`${ item.isMovie? `movies/${`m${item.id}`}` : `series/${`s${item.id}` }` } `)}>
        <div className="relative hover:scale-[102%]">
            <div className="w-[600px]">
                <img className=" opacity-40 rounded-3xl w-full" src={`https://image.tmdb.org/t/p/w500/${item.backdrop}`} />
            </div>
            <div className="absolute flex gap-10 top-[10%] left-[8%]">
                <img className=" w-44 rounded-2xl shadow-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                <DescriptionBanner key={item.id} item={item} />
            </div>

        </div>

        </a>
    )
}

export default CardCarrosel;