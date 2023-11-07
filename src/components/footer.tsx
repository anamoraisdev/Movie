import { BiCopyright, BiLink, BiLogoGmail, BiLogoInstagram, BiLogoTiktok, BiLogoTwitter, BiLogoWhatsapp, BiLogoYoutube, BiPhone } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-gray-800 px-20 pt-20 pb-4 flex flex-col gap-2">

            <div className="flex text-gray-400 justify-between sm:flex-wrap ">
                <div className="flex flex-col gap-4 max-w-[600px] min-w-[300px]">
                    <h1 className="font-bold text-gray-300 text-medium">LOGO</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati nesciunt distinctio aperiam? Ullam, aliquid incidunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. oMaxime cum blanditiis quod, ab molestias soluta deleniti, laboriosam esse culpa eaque quo praesentium sunt accusamus ad. Esse reprehenderit consequatur molestias soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                </div>
           
                <div className="flex flex-col gap-4 max-w-[30%] min-w-[30%]">
                    <h1 className="font-bold text-gray-300">Important Links</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 hover:underline">
                            <BiLink />
                            <a>provident non minus</a>
                        </div>
                        <div className="flex items-center gap-1 hover:underline">
                            <BiLink />
                            <a>placeat optio nihil</a>
                        </div>
                        <div className="flex items-center gap-1 hover:underline">
                            <BiLink />
                            <a>lorem ipsum dolor sit</a>
                        </div>
                        <div className="flex items-center gap-1 hover:underline">
                            <BiLink />
                            <a>cupiditate ullam maiores</a>
                        </div>
                        <div className="flex items-center gap-1 hover:underline">
                            <BiLink />
                            <a>amet consectetur adipisicing</a>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button className="p-2 bg-slate-700 hover:bg-slate-900 rounded"><BiLogoInstagram /></button>
                        <button className="p-2 bg-slate-700 hover:bg-slate-900 rounded"><BiLogoWhatsapp /></button>
                        <button className="p-2 bg-slate-700 hover:bg-slate-900 rounded"><BiLogoTiktok /></button>
                        <button className="p-2 bg-slate-700 hover:bg-slate-900 rounded"><BiLogoTwitter /></button>
                        <button className="p-2 bg-slate-700 hover:bg-slate-900 rounded"><BiLogoYoutube /></button>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 max-w-[30%] min-w-[30%] ">
                    <h1 className="font-bold text-gray-300">Contact</h1>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex gap-2 items-center">
                                <BiPhone />
                                <p>88 2893-3830</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <BiPhone />
                                <p>88 2893-3830</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <BiLogoGmail />
                                <p>seuemail@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <BiLogoGmail />
                                <p>seuemail@gmail.com</p>
                            </div>

                        </div>

                        <div className="gap-4 flex flex-col">
                            <h1 className="max-w-[70%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</h1>
                            <div className="flex gap-2">
                                <input className="rounded-md w-[100%] max-w-[50%]" placeholder="digite seu email"></input>
                                <button className="px-2 py-1 bg-slate-900 rounded-md hover:bg-slate-700">enviar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <hr className="mt-10 opacity-30"></hr>

            <div className="flex text-gray-400 justify-center text-sm items-center mt-2" >
                <BiCopyright />
                <p>2023 Ana Morais, inc</p>
            </div>

        </div>
    )
}

export default Footer;