
import '../index.css'
import { PropsMoviesSeries } from '../interfaces/movieSerie'

const UpcomingList = ({ itens, title }: PropsMoviesSeries) => {
    return (

            <div className='px-3'>
                <h1 className='font-bold mb-6'>{title}</h1>
                <div className="flex flex-col gap-4">
                    {itens && itens.map((item, index)  => index < 6 && 
                    <a href={item.isMovie ? `movies/${`m${item.id}`}` : `series/${`s${item.id}`}`}>
                        <main key={item.id} className="bg-slate-600 p-2 rounded-lg" >
                            <div className="min-w-[15rem] max-w-[15rem]">
                                <img alt={`poster do filme ${item.name}`} src={`https://image.tmdb.org/t/p/w500/${item.backdrop}`} className="rounded-lg w-[30]" />
                            </div>
                            <div className="min-w-[15rem] max-w-[15rem] p-2">
                                <h1 className="font-semibold">{item.name}</h1>
                                <p className="truncate">{item.overview}</p>
                            </div>
                        </main>

                    </a>

                    )}

                </div>
            </div>

    )
}

export default UpcomingList