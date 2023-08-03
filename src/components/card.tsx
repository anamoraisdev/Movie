const Card = ({release}) => {
    return (
        <div className="">
            <div className="min-w-[10rem] max-w-[10rem] flex flex-col items-center justify-center">
                <img className="" alt={`poster do filme ${release.title || release.original_name}`} src={`https://image.tmdb.org/t/p/w500/${release.poster_path}`} />
            </div>
            <div>
                <p className="">{release.title || release.original_name}</p>
            </div>
        </div>
    )
}

export default Card