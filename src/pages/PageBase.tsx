
import Navbar from "../components/navbar"
import Menu from "../components/menu"
import { Outlet } from "react-router-dom"
import UpcomingList from "../components/upcomingList"
import Footer from "../components/footer"
import { Populity, searchPopulity} from "../redux/slicers/populitySlicer"
import { useAppDispatch, useAppSelector } from "../utils/hooks/useRedux"
import { useEffect } from "react"
import { searchGenres } from "../redux/slicers/genresSlicer"
import { searchPerson } from "../redux/slicers/personSlicer"
import NavbarMobile from "../components/navbarMobile"


const PageBase = () => {
    const dispatch = useAppDispatch()
    const itens = useAppSelector(state => state.populity.movies) as Populity

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchPopulity())
        dispatch(searchPerson())
    },[dispatch])
 

    return (
        <main className="w-screen">
            <div className="flex md:hidden xl:flex sm:hidden">
            <Navbar />
            </div>

            <div className=" 2xl:flex xl:flex hidden">
                <div className="w-[10%] border xl:w-[10%]">
                    <Menu />
                </div>
                <div className="w-[70%] border xl:w-[65%]">
                    <Outlet />
                </div>
                <div className="w-[20%] border flex justify-center xl:w-[25%]">
                 <UpcomingList itens={itens?.upcoming} title={"upcoming Movies"} />
                </div>
            </div>
            <div className="hidden md:flex sm:flex">
                <NavbarMobile/>
            </div>
            <div className="w-screen xl:hidden 2xl:hidden lg:flex lg:justify-center md:flex md:justify-center">
                <div className="md:w-[95%] border lg:w-[95%]">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default PageBase