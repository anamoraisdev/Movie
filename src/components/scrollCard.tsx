
import { PropsMovies } from "../interfaces/movie"
import Card from "./card"


const ScrollCard = ({itens, title}: PropsMovies) => {
   
    return (
        <main className="flex flex-col gap-3">
            <h1 className="font-bold">{title}</h1>
            <div className="flex overflow-x-scroll gap-3 touch-auto py-5">
                {itens.map((item) =>
                   <Card key={item.id} item={item}/>
                )}
            </div>
        </main>
    )
}

export default ScrollCard