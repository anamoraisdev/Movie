
import  {  useEffect, useRef, useState } from "react"
import Card from "./card"
import { PropsMoviesSeries } from "../interfaces/movieSerie"


const ScrollCard = ({ itens, title }: PropsMoviesSeries) => {

    const refCarossel = useRef<HTMLDivElement>(null);
    const move = 600

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

        <main className="relative flex flex-col gap-3">
            <h1 className="font-bold">{title}</h1>
            <div className="flex items-center">
                <button className="h-[17rem] w-20 bg-gradient-to-r from-black " onClick={previusImage}>{"<"}</button>
                <div className="flex scroll-smooth overflow-hidden gap-3 touch-auto py-5" ref={refCarossel}>
                    {itens.map((item) =>
                        <Card key={item.id} item={item} />
                    )}
                </div>
                <button className="h-[17rem] w-20 bg-gradient-to-l from-black " onClick={nextImage}>{">"}</button>
            </div>

        </main>
    )
}

export default ScrollCard