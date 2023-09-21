import { useNavigate } from "react-router-dom";
import { PropsPerson } from "../interfaces/person";

const CardPersonScroll = ({ person }: PropsPerson) => {
    const navigate = useNavigate()
    
    return (
        <div onClick={() => navigate(`/person/${person.id}`)} className="min-w-[10rem] max-w-[10rem] max-h-[10rem] min-h-[10rem] flex flex-col items-center justify-center hover:scale-[101%]">
            <img className="object-cover rounded-full min-w-[10rem] max-w-[10rem] max-h-[10rem] min-h-[10rem]" alt={`Foto do ator ${person?.name}`} src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
            <div className="min-w-[10rem] max-w-[10rem] flex">
                <p className="wrap truncate">{person?.name }</p>
            </div>
        </div>
    )
}
export default CardPersonScroll;