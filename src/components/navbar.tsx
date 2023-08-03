const Navbar = () => {
    return (
        <div className="bg-one flex justify-between p-4">
            <a href="/">LOGO</a>
            <ul className="flex gap-2">
                <a href="/movies">
                    <li>Filmes</li>
                </a>
                <a href="/favoritos">
                    <li>Favoritos</li>
                </a>

            </ul>
        </div>
    )
}

export default Navbar