import { BiHeart, BiSolidHeart } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux"
import { addListFavorite, deleteFavorite } from "../redux/slicers/favorite"
import {PropsMovieSerie } from "../interfaces/movieSerie"
import { useNavigate } from "react-router-dom"
import poster from '../utils/assets/poster.png'

const Card = ({ item }: PropsMovieSerie) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const favorites = useAppSelector(state => state.favorites)
    const idFormat = item?.id.toString() as string



    const checkFavorite = () => {
        favorites.all.map((fav) => {
            if(fav.id === item?.id){
               setIsFavorite(true)
            }
        })
    }

    const favoriteTitle = () => {
        if(item){
            if (!isFavorite) {
                setIsFavorite(true)
                dispatch(addListFavorite(item))
                
            }else{
                setIsFavorite(false)
                dispatch(deleteFavorite(item.id))
                
            }
        }
    }

    useEffect(() => {
        checkFavorite()
    }, [item])

    
    
    return (
        <>
            <a className="relative" onClick={() => navigate(`${ item?.isMovie? `/movies/${`m${item.id}`}` : `/series/${`s${idFormat}` }` } `)}>
                <div className="w-full flex flex-col items-center justify-center hover:scale-[101%]">
                    <img className="rounded-2xl" alt={`poster do filme ${item ? `${item.name}` : ''}`} src={item?.poster ? `https://image.tmdb.org/t/p/w500/${item.poster}` : `${poster}`}  />
                    <div className="min-w-[10rem] max-w-[10rem] flex">
                        <p className="wrap truncate">{item?.name}</p>
                    </div>
                    <button onClick={() => favoriteTitle()} className={`absolute top-3 right-0 text-xl ${isFavorite? "text-red-500" : ""}`}>
                        {isFavorite ? <BiSolidHeart />
                            :
                            <BiHeart />
                        }
                    </button>
                </div>
            </a>

        </>
    )
}

export default Card