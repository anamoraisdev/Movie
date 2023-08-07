const Navbar = () => {
    return (
        <div className="flex justify-start gap-[7rem] p-5">
            <h1 className="font-bold pl-[3rem]">LOGO</h1>
            <ul className="flex gap-2 px-2">
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/movies">
                    <li>Movies</li>
                </a>
                <a href="/favoritos">
                    <li>Series</li>
                </a>
                <a href="/favoritos">
                    <li>Favoritos</li>
                </a>
            </ul>

           
    
        </div>
    )
}

export default Navbar