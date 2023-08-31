import { BiStar } from "react-icons/bi";
import { PropsPerson } from "../interfaces/person";


const CardPerson = ({ person}: PropsPerson) => {

    return (
        <div className="flex items-center gap-4">
            <img className="object-cover w-[10rem] h-[10rem] rounded-full" src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
            <div className="w-[50%] ">
                <h1 className="font-semibold mb-2">{person.name}</h1>
                {person.known_for.map((item) => (
                    <p className="truncate">{item.original_title}</p>
                ))}
                <p className="flex items-center gap-2 mt-2"><BiStar />{person.popularity}</p>
            </div>
        </div>
    )
}
export default CardPerson;