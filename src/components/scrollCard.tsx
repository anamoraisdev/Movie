import Card from "./card"


const ScrollCard = ({releases}) => {
   
    return (
        <main>
            <h1>Lancamentos</h1>
            <div className="flex overflow-hidden hover:overflow-x-scroll gap-2 touch-auto">
                {releases.map((release) =>
                   <Card release={release}/>
                )}
            </div>
        </main>
    )
}

export default ScrollCard