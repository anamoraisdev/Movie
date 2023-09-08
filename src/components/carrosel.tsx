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