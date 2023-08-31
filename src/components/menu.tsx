import {FiUsers } from "react-icons/fi";
import { BiCloud, BiHeart, BiLogOut } from "react-icons/bi";

const Menu = () => (
    <div className="mx-10 flex flex-col items-start gap-10">

        <ul className="flex flex-col gap-3">
            <a href="/person">
                <li className="flex gap-2 items-center hover:scale-[105%]"><FiUsers />person</li>
            </a>
            <li className="flex gap-2 items-center hover:scale-[105%]"><BiHeart />Favorits</li>
        </ul>
        <div className="w-full border-b border-gray-500 "></div>

        <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center hover:scale-[105%]"><BiCloud className=""/>Help</li>
            <li className="flex gap-2 items-center hover:scale-[105%]"><BiLogOut/>exit</li>
        </ul>
    </div>
)

export default Menu