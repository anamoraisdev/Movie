
const Card = ({ item}) => {
    return (
        <div className="min-w-[10rem] max-w-[10rem] max-h-[15rem] min-h-[15rem] flex flex-col items-center justify-center">
            <img className="" alt={`poster do filme ${item.title || item.original_name}`} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            <div className="min-w-[10rem] max-w-[10rem]">
                <p className="wrap truncate">{item.title || item.original_name}</p>
            </div>
        </div>
    )
}

export default Card