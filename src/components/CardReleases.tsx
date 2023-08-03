import { useAppSelector } from "../app/hooks"

const CardReleases = () => {
    const releases = useAppSelector(state => state.movies.releases)
    console.log(releases)
    return (
        <main>
            <h1>Lancamentos</h1>
            <div className="flex overflow-hidden hover:overflow-x-scroll gap-2 touch-auto">
                {releases.map((release) =>
                    <div className="">
                        <div className="min-w-[10rem] max-w-[10rem] flex flex-col items-center justify-center">
                            <img className="" alt={`poster do filme ${release.title|| release.original_name}`} src={`https://image.tmdb.org/t/p/w500/${release.poster_path}`}/>
                        </div>
                        <div>
                            <p className="">{release.title || release.original_name}</p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default CardReleases