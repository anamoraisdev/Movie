import { useNavigate } from "react-router-dom";
import { PropsMovieSerie } from "../interfaces/movieSerie";
import DescriptionBanner from "./bannerDescription"
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { addListFavorite, deleteFavorite } from "../redux/slicers/favorite";



const CardCarrosel = ({ item }: PropsMovieSerie) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const favorites = useAppSelector(state => state.favorites)

    const checkFavorite = () => {
        favorites.all.map((fav) => {
            if(fav.id === item.id){
               setIsFavorite(true)
            }
        })
    }

    const favoriteTitle = () => {
        if (!isFavorite) {
            setIsFavorite(true)
            dispatch(addListFavorite(item))
            
        }else{
            setIsFavorite(false)
            dispatch(deleteFavorite(item.id))
            
        }
    }

    useEffect(() => {
        checkFavorite()
    }, [item])

    return (
        <div className="relative">
            <a onClick={() => navigate(`${ item.isMovie? `/movies/${`m${item.id}`}` : `/series/${`s${item.id}` }` } `)}>
            <div className="relative hover:scale-[101%]">
                <div className="w-[600px]">
                    <img className="opacity-20 rounded-3xl w-full" src={`https://image.tmdb.org/t/p/w500/${item.backdrop}`} />
                </div>
                <div className="absolute flex gap-10 top-[10%] left-[8%]">
                    <img className=" w-44 rounded-2xl shadow-xl" src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                    <DescriptionBanner key={item.id} item={item} />
                </div>

            </div>
            </a>
            <button onClick={() => favoriteTitle()} className={`absolute top-4 right-6 text-xl ${isFavorite? "text-red-500" : ""}`}>
                    {isFavorite ? <BiSolidHeart />
                        :
                        <BiHeart />
                    }
            </button>

        </div>
    )
}

export default CardCarrosel;