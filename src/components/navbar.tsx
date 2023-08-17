import Filter from "./filter"

const Navbar = () => {
    return (
        <div className="flex justify-start gap-[7rem] py-5 bg-one">
            <h1 className="font-bold pl-[3rem]">LOGO</h1>
            <ul className="flex gap-2 px-2">
                <a href="/home">
                    <li>Home</li>
                </a>
                <a href="/movies">
                    <li>Movies</li>
                </a>
                <a href="/series">
                    <li>Series</li>
                </a>
                <a href="/favoritos">
                    <li>Favoritos</li>
                </a>
            </ul>
           <Filter/>
        </div>
    )
}

export default Navbar