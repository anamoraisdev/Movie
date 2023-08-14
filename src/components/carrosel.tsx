import Card from "./card"

const Carrosel = ({items}) => {

    return(
        <div>
            {items.map((item) =>
                <div className="relative">
                    <img className="absolute" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                    <img className="" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}/>
                </div>
            )}
        </div>
    )
}
export default Carrosel