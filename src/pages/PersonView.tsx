import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../utils/services/service";
import { PersonDetails } from "../interfaces/person";
import ScrollCard from "../components/scrollCard";
import { MovieSerie } from "../interfaces/movieSerie";

const PersonView = () => {
    const { id } = useParams()
    const [person, setPerson] = useState<PersonDetails>()
    const [credits, setCredits] = useState<MovieSerie[]>()
    const idFormat = Number(id)
    const [openBiografy, setOpenBiografy] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)


    const checkOpen = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }


    useEffect(() => {
        service.getDetailsPerson(idFormat, setPerson)
        service.getCreditsPerson(idFormat, setCredits)

    }, [id])


    return (
        <>
            <div className="flex gap-6">
                <section className="w-[30%] mr-4">
                    <figure className="w-full">
                        <img className="w-full rounded-lg h-[33.5rem] object-cover" src={`https://image.tmdb.org/t/p/w500/${person?.profile_path}`} />

                    </figure>
                    <section className=" gap-10 justify-center w-full mt-5 ">
                        <h2 className="font-bold text-lg">Personal information</h2>
                        <div>
                            <h3 className="font-bold text-md">Known for departament</h3>
                            <div className="bg-gray-800 p-2">
                                <p>{person?.known_for_department}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-md">Gender</h3>
                            <div className="bg-gray-800 p-2">

                                <p>{person?.gender === 1 ? "Feminino" : "Masculino"}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-md">Birthplace</h3>
                            <div className="bg-gray-800 p-2">

                                <p>{person?.place_of_birth}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-md">Birthday</h3>
                            <div className="bg-gray-800 p-2">

                                <p>{person?.birthday}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-md">Deathday</h3>
                            <div className="bg-gray-800 p-2">

                                <p>{person?.deathday ? `${person.deathday}` : "-"}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-md">Know for</h3>
                            <div className="bg-gray-800 p-2">
                                {person && person.also_known_as.map((item) => <p key={item}>{item}</p>)}
                            </div>
                        </div>
                    </section>
                </section>
                <section className="w-[70%] flex flex-col gap-2">
                    <article className="flex flex-col gap-4">
                        <h1 className="font-bold text-2xl ">{person?.name}</h1>
                        <h2 className="font-bold">Biography</h2>
                    </article>

                    <section className="">
                        <p className={` ${openBiografy ? "line-clamp-none" : ""} line-clamp-6 text-justify break-words relative`}>{person?.biography ? `${person.biography}` : `We don't have a biography for ${person?.name} `}</p>
                    </section>
                    {!openBiografy && person?.biography && person?.biography.length > 1000 &&
                        <button className=" text-end absolute top-[300px] right-[21rem]  p-1 rounded w-[50rem] text-sm bg-gradient-to-r from-transparent via-[#000913] to-[#000913] " onClick={() => setOpenBiografy(true)}>Read more </button>

                    }


                    <section className="">
                        <ScrollCard title="Know for" itens={credits} />
                    </section>
                    

                    <section className="w-full relative flex flex-col">
                        <div>
                            <h1 className="font-bold text-lg">Acting</h1>
                            <div className="w-full flex text-left">
                                <th className="w-[22%] text-md">Release date</th>
                                <th className="w-[39%] text-md">Job</th>
                                <th className="w-[39%] text-md">Character</th>
                            </div>
                        </div>
                        <div>
                            {!open && credits && credits.map((item, index) => {
                                const isRender = index < 10

                                if (isRender) return (
                                    <div className="flex gap-4 mb-6 w-full bg-gray-800 p-2">
                                        <p className="w-[20%] bg-gray-700 rounded-2xl text-center align-middle">{item?.release ? `${item.release}` : "no date"}</p>
                                        <p className="w-[40%] " >| {item?.name ? `${item.name}` : "-"}  </p>
                                        <p className="w-[40%] ">| {item.character ? `${item.character}` : "-"}  </p>
                                    </div>
                                )
                            })}

                            {open && credits && credits.map((item) =>

                                <div className="flex gap-4 mb-6 w-full bg-gray-800 p-2 items-center">
                                    <p className="w-[20%] bg-gray-700 rounded-2xl text-center align-middle">{item?.release ? `${item.release}` : "no date"}</p>
                                    <p className="w-[40%]">| {item?.name ? `${item.name}` : "-"}  </p>
                                    <p className="w-[40%]">| {item?.character ? `${item.character}` : "-"}  </p>
                                </div>

                            )}


                            <button className="bg-gray-800 px-2 rounded absolute bottom-15 right-[0rem]" onClick={() => checkOpen()}>read more</button>

                        </div>


                    </section>

                </section>
            </div>
        </>

    )
}
export default PersonView;