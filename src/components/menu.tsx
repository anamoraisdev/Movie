import {FiUsers } from "react-icons/fi";
import { BiCloud, BiHeart, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()
    
    return(
        <div className="flex flex-col items-start gap-4 w-[60%]">
           
            <ul className="flex flex-col gap-5">
                <a onClick={() => navigate("/person")}>
                    <li className="flex gap-2 items-center hover:scale-[105%]"><FiUsers />person</li>
                </a>
                <a onClick={() => navigate("/favorites")}>
                    <li className="flex gap-2 items-center hover:scale-[105%]"><BiHeart />Favorits</li>
                </a>
            </ul>
            <div className="w-full border-b border-gray-500 "></div>

            <ul className="flex flex-col gap-5">
                <li className="flex gap-2 items-center hover:scale-[105%]"><BiCloud className=""/>Help</li>
                <a onClick={() => navigate("/")}>
                <li className="flex gap-2 items-center hover:scale-[105%]"><BiLogOut/>exit</li>

                </a>
            </ul>
        </div>
    )
}

export default Menu