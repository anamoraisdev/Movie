import { useEffect, useRef } from "react"
import CardCarrosel from "./cardCarrosel"
import { PropsMoviesSeries } from "../interfaces/movieSerie"


const Carrosel = ({ itens, title }: PropsMoviesSeries) => {
    const refCarossel = useRef<HTMLDivElement>(null);
    const move = 800

    const previusImage = () => {
        if(refCarossel?.current){
           refCarossel.current.scrollLeft -= move
        }
        
    }

    const nextImage = () => {
        if(refCarossel.current){
            refCarossel.current.scrollLeft += move
        }
        
    }

  
    useEffect(() => {
       setTimeout(() => {
        if(refCarossel.current){
            refCarossel.current.scrollLeft += move    
        }
       }, 3000);
    },[])

    return (
        <>
            <main className="relative flex flex-col gap-3 mt-2">
                <h1 className="font-bold ">{title}</h1>
                <div className="flex items-center">
                    <button className="h-[21.5rem] w-[20rem] bg-gradient-to-r from-gray-800 rounded-l-lg " onClick={previusImage}>{"<"}</button>
                    <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5 " ref={refCarossel}>
                        {itens?.map((item) =>
                            <CardCarrosel key={item.id} item={item} />
                        )}
                    </div>
                    <button className="h-[21.5rem] w-[20rem] bg-gradient-to-l from-gray-800  rounded-r-lg" onClick={nextImage}>{">"}</button>
                </div>
            </main>
        </>
    )


}
export default Carrosel;