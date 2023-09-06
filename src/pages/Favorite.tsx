import Card from "../components/card"
import { useAppSelector } from "../redux/hooks"

const Favorites = () => {
    const favorites = useAppSelector(state => state.favorites)
    
    return(
        <div className="flex flex-col">
            <h1>Favorites</h1>
            <div className="flex flex-wrap">

              {favorites && favorites.map((favorite) => <Card item={favorite}/>)}
            </div>
        </div>
    )
}

export default Favorites;