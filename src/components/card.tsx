import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { Movie } from "../interfaces/movie"
import { useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import { addListFavorite, deleteFavorite } from "../redux/slicers/favorite"

export interface PropsMovie {
    item: Movie 
}

const Card = ({ item }: PropsMovie) => {
    const dispatch = useAppDispatch()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const favoriteTitle = () => {
        if (!isFavorite) {
            setIsFavorite(true)
            dispatch(addListFavorite(item))
            item.favorite = true
        }else{
            setIsFavorite(false)
            dispatch(deleteFavorite(item.id))
            item.favorite = false
        }
    }

    return (
        <div className="relative">
            <a href={item.release ? `movies/${`m${item.id}`}` : `series/${`s${item.id}`}`}>
                <div className="min-w-[10rem] max-w-[10rem] max-h-[15rem] min-h-[15rem] flex flex-col items-center justify-center hover:scale-[105%]">
                    <img className="rounded-2xl" alt={`poster do filme ${item?.name}`} src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                    <div className="min-w-[10rem] max-w-[10rem] flex">
                        <p className="wrap truncate">{item?.name || item.original_name}</p>
                    </div>
                </div>
            </a>

            <button onClick={() => favoriteTitle()} className={`absolute top-0 right-2 text-xl ${isFavorite ? "text-red-500" : ""}`}>
                {isFavorite ? <BiSolidHeart />
                    :
                    <BiHeart />
                }
            </button>
        </div>
    )
}

export default Card