
import { useEffect, useRef } from "react"
import Card from "./card"
import { PropsMoviesSeries } from "../interfaces/movieSerie"
import CardPerson from "./cardPerson";
import CardPersonScroll from "./cardPersonScroll";


const ScrollCard = ({ itens, title, person }: PropsMoviesSeries) => {

    const refCarossel = useRef<HTMLDivElement>(null);
    const move = 600

    const previusImage = () => {
        if (refCarossel?.current) {
            refCarossel.current.scrollLeft -= move
        }

    }

    const nextImage = () => {
        if (refCarossel.current) {
            refCarossel.current.scrollLeft += move
        }

    }


    useEffect(() => {
        setTimeout(() => {
            if (refCarossel.current) {
                refCarossel.current.scrollLeft += move
            }
        }, 3000);
    }, [])



    return (

        <main className="relative flex flex-col gap-3">
            <h1 className="font-bold">{title}</h1>
            <div className="flex items-center">
                <button className="h-[16.5rem] w-20 bg-gradient-to-r from-gray-800 rounded-l-lg" onClick={previusImage}>{"<"}</button>
                {person ? 
                    <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5" ref={refCarossel}>
                        {person && person.map((item) =>
                            <CardPersonScroll key={item.id} person={item} />
                        )}
                    </div>
                    :
                    <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5" ref={refCarossel}>
                        {itens && itens.map((item) =>
                            <Card key={item.id} item={item} />
                        )}
                    </div>
                }
                <button className="h-[16.5rem] w-20 bg-gradient-to-l from-gray-800 rounded-r-lg" onClick={nextImage}>{">"}</button>
            </div>

        </main>
    )
}

export default ScrollCard