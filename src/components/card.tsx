const Card = ({item}) => {
    return (
        <div className="">
            <div className="min-w-[10rem] max-w-[10rem] flex flex-col items-center justify-center">
                <img className="" alt={`poster do filme ${item.title || item.original_name}`} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
            </div>
            <div>
                <p className="">{item.title || item.original_name}</p>
            </div>
        </div>
    )
}

export default Card