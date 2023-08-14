import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "../pages/movies"
import Home from "../pages/home"
import MoviesPopulity from "../pages/moviesPopulity"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/movies' element={<Movies />}/>
          <Route path="/moviesPopulity" element={<MoviesPopulity/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
