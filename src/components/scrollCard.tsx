import Card from "./card"


const ScrollCard = ({itens, title}) => {
   
    return (
        <main>
            <h1 className="font-bold">{title}</h1>
            <div className="flex overflow-hidden hover:overflow-x-scroll gap-2 touch-auto">
                {itens.map((item) =>
                   <Card item={item}/>
                )}
            </div>
        </main>
    )
}

export default ScrollCard