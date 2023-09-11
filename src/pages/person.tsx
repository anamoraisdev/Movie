import { useAppSelector } from "../redux/hooks";
import CardPerson from "../components/cardPerson";

const Person = () => {
    const persons = useAppSelector(state => state.person)

    return (
        <div>
            <h1 className="font-bold mb-8">Populity Person</h1>
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

export default Person;