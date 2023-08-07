
import '../index.css'

const UpcomingList = ({title, itens}) => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className='font-bold '>{title}</h1>
            {itens.map((item) => 
                <main className="">
                    <div className="min-w-[15rem] max-w-[15rem]">
                        <img alt={`poster do filme ${item.title || item.original_name}`} src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="rounded-lg w-[30]"/>
                    </div>
                    <div className="min-w-[15rem] max-w-[15rem]">
                        <h1 className="font-semibold">{item.title}</h1>
                        <p className="wrap truncate">{item.overview}</p>
                    </div>
                </main>
            )}
        </div>
    )
}

export default UpcomingList