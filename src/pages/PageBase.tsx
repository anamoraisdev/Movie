
import Navbar from "../components/navbar"
import Menu from "../components/menu"
import { Outlet, useNavigate } from "react-router-dom"
import UpcomingList from "../components/upcomingList"
import Footer from "../components/footer"
import { Populity, searchPopulity } from "../redux/slicers/populitySlicer"
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux"
import { useEffect, useState } from "react"
import { searchGenres } from "../redux/slicers/genresSlicer"
import { searchPerson } from "../redux/slicers/personSlicer"
import NavbarMobile from "../components/navbarMobile"
import { FiUsers } from "react-icons/fi"
import { BiHeart, BiHome, BiMovie, BiTv } from "react-icons/bi"


const PageBase = () => {
    const dispatch = useAppDispatch()
    const itens = useAppSelector(state => state.populity.movies) as Populity
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const openMenu = () => {
        if (open) {
            setOpen(false)

        } else {
            setOpen(true)

        }
    }

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchPopulity())
        dispatch(searchPerson())
    }, [dispatch])


    return (
        <main className="w-screen ">
            {itens.allDay?.length === 0 ?
                <div className="flex justify-center items-center bg-gray-800 p-2 gap-2">
                    <svg width="24" fill="gray" className="animate-spin" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"/></svg>
                    <p>loading ...</p>
                </div>
                :
                <div>
                    <div className="  xl:flex  hidden ">
                        <Navbar />
                    </div>

                    <div className="xl:flex hidden mt-3">
                        <div className="w-[5%] mx-8 mt-3">
                            <Menu />
                        </div>
                        <div className="w-[70%]">
                            <Outlet />
                        </div>
                        <div className="w-[20%] flex justify-center">
                            <UpcomingList itens={itens?.upcoming} title={"upcoming Movies"} />
                        </div>
                    </div>
                    <div className="flex xl:hidden">
                        <NavbarMobile openMenu={openMenu} />
                    </div>



                    {open &&


                        <ul className="flex flex-col gap-5 bg-gray-800 px-4 py-2 rounded-b-xl">
                            <a onClick={() => navigate("/")}>
                                <li className="flex gap-2 items-center "><BiHome />home</li>
                            </a>
                            <a onClick={() => navigate("/movies")}>
                                <li className="flex gap-2 items-center "><BiMovie />movies</li>
                            </a>
                            <a onClick={() => navigate("/series")}>
                                <li className="flex gap-2 items-center"><BiTv />series</li>
                            </a>
                            <a onClick={() => navigate("/person")}>
                                <li className="flex gap-2 items-center "><FiUsers />person</li>
                            </a>
                            <a onClick={() => navigate("/favorites")}>
                                <li className="flex gap-2 items-center"><BiHeart />Favorits</li>
                            </a>
                        </ul>


                    }

                    <div className="w-screen xl:hidden flex justify-center">
                        <div className="w-[95%]">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />

                </div>

            }


        </main>
    )
}

export default PageBase