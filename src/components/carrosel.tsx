import {PropsMovies} from "../interfaces/movie"
import CardCarrosel from "./cardCarrosel"


const Carrosel = ({itens, title}: PropsMovies) => {
    
    return (
        <main className="flex flex-col gap-3">
            <p className="font-bold">{title}</p>
            <div className="flex overflow-x-scroll gap-5 touch-auto py-5">
                { itens && itens.map((item) =>
                    <CardCarrosel key={item.id} item={item}/>
                )}
            </div>
        </main>


    )
}
export default Carrosel;