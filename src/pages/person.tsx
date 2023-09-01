import { useAppSelector } from "../redux/hooks";
import CardPerson from "../components/cardPerson";

const Person = () => {
    const persons = useAppSelector(state => state.person.person)
    return (
        <div>
            <h1 className="font-bold mb-8">Populity Person</h1>
            <div className="grid grid-cols-3  gap-5">
                {persons && persons.map((person) => (
                    <CardPerson person={person} />
                ))}
            </div>
        </div>
    )
}

export default Person;