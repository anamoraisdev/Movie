import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addListFavorite, deleteFavorite } from "../redux/slicers/favorite"
import {PropsMovieSerie } from "../interfaces/movieSerie"
import { useNavigate } from "react-router-dom"

const Card = ({ item }: PropsMovieSerie) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
  
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
                <div className="min-w-[10rem] max-w-[10rem] max-h-[15rem] min-h-[15rem] flex flex-col items-center justify-center hover:scale-[105%]">
                    <img className="rounded-2xl" alt={`poster do filme ${item?.name}`} src={`https://image.tmdb.org/t/p/w500/${item.poster}`} />
                    <div className="min-w-[10rem] max-w-[10rem] flex">
                        <p className="wrap truncate">{item?.name || item.original_name}</p>
                    </div>
                </div>
            </a>

            <button onClick={() => favoriteTitle()} className={`absolute top-0 right-2 text-xl ${isFavorite? "text-red-500" : ""}`}>
                {isFavorite ? <BiSolidHeart />
                    :
                    <BiHeart />
                }
            </button>
        </div>
    )
}

export default Card