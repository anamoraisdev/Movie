import { BiMenu } from "react-icons/bi"

const NavbarMobile = () => {
    return (
        <div className="flex justify-between items-center bg-slate-800 w-[100%] h-14">
            <h1 className="font-bold text-md ml-4">LOGO</h1>
            <button className="mr-4">
            <BiMenu size={30}></BiMenu>
            </button>
        </div>
    )
}
export default NavbarMobile