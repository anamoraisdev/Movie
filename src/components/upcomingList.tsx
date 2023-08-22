
import '../index.css'
import { PropsMovie, PropsMovies } from '../interfaces/movie'

const UpcomingList = ({ itens, title }: PropsMovies) => {
    console.log(itens)



    return (
        <div className='px-3'>
            <h1 className='font-bold mb-6'>{title}</h1>
            <div className="flex flex-col gap-4">
                {itens && itens.map((item, index)  => index < 6 && 
                    <main key={item.id} className="bg-slate-600 p-2 rounded-lg" >
                        <div className="min-w-[15rem] max-w-[15rem]">
                            <img alt={`poster do filme ${item.title || item.original_name}`} src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="rounded-lg w-[30]" />
                        </div>
                        <div className="min-w-[15rem] max-w-[15rem] p-2">
                            <h1 className="font-semibold">{item.title}</h1>
                            <p className="wrap truncate">{item.overview}</p>
                        </div>
                    </main>

                )}

            </div>
        </div >
    )
}

export default UpcomingList