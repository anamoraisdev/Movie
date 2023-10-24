
import Filter from "./filter"

const Navbar = () => {
    
    return (
        <div className="w-screen flex items-center pt-5 ">
            <h1 className="font-bold w-[10%] border">LOGO</h1>
            <div className="w-[70%] border xl:w-[65%]">
                 <Filter/>
            </div>
           <div className="w-[10%] border xl:w-[25%] ">
           </div>

        </div>
    )
}

export default Navbar