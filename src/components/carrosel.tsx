import { useEffect, useRef } from "react"
import { PropsMovies } from "../interfaces/movie"
import CardCarrosel from "./cardCarrosel"


const Carrosel = ({ itens, title }: PropsMovies) => {

    const refCarossel = useRef(null)

    const previusImage = () => {
        refCarossel.current.scrollLeft -= 500
    }

    const nextImage = () => {
        refCarossel.current.scrollLeft += 500
    }

    useEffect(() => {
        let move = 500
        setTimeout(() => {
            if (move >= 1200) {
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
            <main className="relative flex flex-col gap-3">
                <h1 className="font-bold">{title}</h1>
                <div className="flex items-center">
                    <button className="h-[22rem] w-[20rem] bg-gradient-to-r from-black " onClick={previusImage}>{"<"}</button>
                    <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5" ref={refCarossel}>
                        {itens?.map((item) =>
                            <CardCarrosel key={item.id} item={item} />
                        )}
                    </div>
                     <button className="h-[22rem] w-[20rem] bg-gradient-to-l from-black  " onClick={nextImage}>{">"}</button>
                </div>
            </main>
        </>
    )


}
export default Carrosel;