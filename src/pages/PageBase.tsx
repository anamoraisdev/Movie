
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
            console.log("O")
        } else {
            setOpen(true)
            console.log("I")
        }
    }

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchPopulity())
        dispatch(searchPerson())
    }, [dispatch])


    return (
        <main className="w-screen">
            <div className="flex md:hidden xl:flex sm:hidden ">
                <Navbar />
            </div>

            <div className=" 2xl:flex xl:flex hidden">
                <div className="w-[10%] mx-8">
                    <Menu />
                </div>
                <div className="w-[70%] xl:w-[75%]">
                    <Outlet />
                </div>
                <div className="w-[20%] flex justify-center">
                    <UpcomingList itens={itens?.upcoming} title={"upcoming Movies"} />
                </div>
            </div>
            <div className="flex 2xl:hidden xl:hidden">
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
           
            <div className="w-screen xl:hidden 2xl:hidden lg:flex lg:justify-center md:flex md:justify-center">
                <div className="md:w-[95%] lg:w-[95%]">
                    <Outlet />
                </div>
            </div>
            <Footer />


        </main>
    )
}

export default PageBase