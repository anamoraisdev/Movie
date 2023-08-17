import { useEffect, useRef } from "react"
import { PropsMovies } from "../interfaces/movie"
import CardCarrosel from "./cardCarrosel"


const Carrosel = ({ itens, title }: PropsMovies) => {

    const refCarossel = useRef(null)

    const previusImage = () => {
        refCarossel.current.scrollLeft -= 400
    }

    const nextImage = () => {
        refCarossel.current.scrollLeft += 400
    }
    useEffect(() => {
        let move = 400
        setTimeout(() => {
            if (move >= 2100) {
                refCarossel.current.scrollLeft -= move
                move = 400
            } else {
                refCarossel.current.scrollLeft += move
                move = 300
            }

        }, 1000);
    }, [])

    return (
        <>
            <h1 className="font-bold">{title}</h1>
            <div className="flex justify-between">
            <button className="" onClick={previusImage}>{"<"}</button>
            <button className=" " onClick={nextImage}>{">"}</button>

            </div>
            <main className="relative">
                <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5" ref={refCarossel}>
                    {itens.map((item) =>
                        <CardCarrosel key={item.id} item={item} />
                    )}
                </div>
            </main>
        </>
    )


}
export default Carrosel;