import { useAppSelector } from "../redux/useRedux";
import CardPerson from "../components/cardPerson";

const People = () => {
    const persons = useAppSelector(state => state.person.person)

    return (
        <div>
            <h1 className="font-bold text-2xl mb-8">Populity Person 🎖️</h1>
            <div className="grid grid-cols-3  gap-5">
                {persons && persons.map((person) => 
            
                     <div className="p-2 bg-gray-800 rounded-2xl hover:scale-105" key={person.id}>
                            <CardPerson person={person} />
                    </div>

                
                )}
            </div>
        </div>
    )
}

export default People;