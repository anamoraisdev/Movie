
import Filter from "./filter"

const Navbar = () => {
    
    return (
        <div className="w-screen flex items-center pt-5 ">
            <h1 className="font-bold w-[5%] mx-8">LOGO</h1>
            <div className="w-[70%]">
                 <Filter/>
            </div>
           <div className="w-[20%]">
           </div>

        </div>
    )
}

export default Navbar