
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




const PageBase = () => {
    const dispatch = useAppDispatch()
    const itens = useAppSelector(state => state.populity.movies) as Populity

    useEffect(() => {
        dispatch(searchGenres())
        dispatch(searchPopulity())
        dispatch(searchPerson())
    },[dispatch])
 

    return (
        <main className="">
            <Navbar />
            <div className="flex justify-between py-[2rem]">
                <Menu />
                <div className="w-[70%] flex flex-col justify-start">
                    <Outlet />

                </div>
                <UpcomingList itens={itens?.upcoming} title={"upcoming Movies"} />
            </div>
            <Footer/>


     
        </main>
    )
}

export default PageBase