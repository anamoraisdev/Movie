import Card from "../components/card"
import { useAppSelector } from "../redux/hooks"

const Favorites = () => {
    const favorites = useAppSelector(state => state.favorites)
    
    return(
        <div className="m-0 flex flex-col gap-8">
            <h1 className="font-bold text-medium">Favorites</h1>
            <div className="flex flex-wrap gap-4">
              {favorites && favorites.map((favorite) => <div className="mt-6">
                  <Card item={favorite}/>
                </div>
              )}
            </div>
        </div>
    )
}

export default Favorites;