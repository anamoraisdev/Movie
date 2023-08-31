import { Movie } from "../interfaces/movie"
import { Serie } from "../interfaces/serie"

export interface PropsMovie {
    item: Movie | Serie
}

const Card = ({ item }: PropsMovie) => {
    
    return (
        <a onClick={() => checkParams()} href={item.release_date ? `movies/${`m${item.id}`}` : `series/${`s${item.id}`}` }>
            <div className="min-w-[10rem] max-w-[10rem] max-h-[15rem] min-h-[15rem] flex flex-col items-center justify-center hover:scale-[105%]">
                <img className="rounded-2xl" alt={`poster do filme ${item?.title}`} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                <div className="min-w-[10rem] max-w-[10rem]">
                    <p className="wrap truncate">{item?.title || item.name}</p>
                </div>
                <div className="hidden w-[2rem] h-[2rem] rounded-full bg-slate-600 absolute flex items-center">{item.vote_count}</div>
            </div>
        </a>
    )
}

export default Card