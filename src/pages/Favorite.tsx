import Card from "../components/card"
import { useAppSelector } from "../redux/hooks"

const Favorites = () => {
    const favorites = useAppSelector(state => state.favorites)
    
    return(
        <div className="flex">
            <h1>Favorites</h1>
            {favorites && favorites.map((favorite) => <Card item={favorite}/>)}
        </div>
    )
}

export default Favorites;