import { BiSearch } from "react-icons/bi";

const AvisoFavorito = () => {
    return (
        <div className="self-center flex flex-col justify-center items-center gap-2 bg-gray-800 p-4 w-[30rem] rounded-lg mt-10 shadonw">
            <h1 className="text-medium font-bold">Ops! Voce nao tem nenhum titulo favoritado. </h1>
            <div className="flex gap-2 items-center ">
                <BiSearch />
                <p> nenhum resultado encontrado </p>
            </div>
        </div>
    )
}
export default AvisoFavorito;