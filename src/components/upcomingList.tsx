
import { useNavigate, useParams } from 'react-router-dom'
import '../index.css'
import { PropsMoviesSeries } from '../interfaces/movieSerie'


const UpcomingList = ({ itens, title }: PropsMoviesSeries) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const isPageItem:boolean = typeof id === "string"

    return (

            <div className='px-3 mt-2 '>
            
                <h1 className='font-bold mb-6 text-medium'>{title} &#x1F37F;</h1>
              
                <div className={`flex flex-col gap-4 overflow-y-scroll  ${isPageItem ? "h-[71.2rem]" : "h-[107rem]"}`}>
                    {itens && itens.map((item, )  =>  
                    <a key={item.id} onClick={() => navigate(item.isMovie ? `/movies/${`m${item.id}`}` : `/series/${`s${item.id}`}`)}>
                        <main  className="bg-gray-800 p-2 rounded-lg" >
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