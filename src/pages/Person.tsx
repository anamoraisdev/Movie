import { useParams } from "react-router-dom";

const Person = () => {
    const {id} = useParams()
    
    return (
        <div>person {id}</div>
    )
}
export default Person;