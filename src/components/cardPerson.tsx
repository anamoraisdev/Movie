import { BiStar } from "react-icons/bi";
import { PropsPerson } from "../interfaces/person";
import { useNavigate} from "react-router-dom";
import profile from '../utils/assets/profile.jpg'


const CardPerson = ({ person}: PropsPerson) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/person/${person.id}`)} className="flex items-center gap-4">
            <img className="object-cover w-[10rem] h-[10rem] rounded-xl" src={person.profile_path ? `https://image.tmdb.org/t/p/w500/${person.profile_path}` : `${profile}`} />
            <div className="w-[50%] ">
                <h1 className="font-semibold mb-2">{person.name}</h1>
                {person.known_for && person.known_for.map((item) => (
                    <p key={item.id} className="truncate">{item.original_title}</p>
                ))}
                <p className="flex items-center gap-2 mt-2"><BiStar />{person.popularity}</p>
            </div>
        </div>
    )
}
export default CardPerson;