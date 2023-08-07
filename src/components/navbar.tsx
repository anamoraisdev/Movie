const Navbar = () => {
    return (
        <div className="flex justify-between p-4">
            <h1>LOGO</h1>
            <ul className="flex gap-2">
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
            <button>login</button>
        </div>
    )
}

export default Navbar