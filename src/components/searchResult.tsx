import { useAppSelector } from "../redux/hooks"
import Card from "./card"

const SearchResultView = () => {
    const movies = useAppSelector(state => state.movies.movies)
    return (
        <div className="flex flex-wrap gap-4 w-full">
            {movies?.map((movie) => (
              <div className="mt-6" key={movie.id}>
                <Card key={movie?.id} item={movie} />
              </div>
            )
            )}
            <button> Ver Mais</button>
          </div>
    )
}

export default SearchResultView;