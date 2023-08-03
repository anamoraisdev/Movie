import { useAppSelector } from "../app/hooks"

const Filter = () => {
    const genres = useAppSelector(state => state.genres.genres)
    return (
        <div className="bg-one p-5 flex justify-between gap-4">
            <input placeholder="digite o nome do filme" className="px-8 rounded text-one"></input>
            <div className="flex gap-4">
                <select className="px-8 rounded text-one">
                    {genres.map((gender) =>
                        <option key={gender.id}>{gender.name}</option>
                    )}
                </select>
                <button className="bg-three px-2 rounded">filtrar</button>
            </div>
        </div>
    )
}
export default Filter 