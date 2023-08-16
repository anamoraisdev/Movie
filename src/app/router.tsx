import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "../pages/movies"
import MoviesPopulity from "../pages/moviesPopulity"
import PageBase from "../pages/PageBase"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<PageBase/>}>
          <Route path='/moviesPopulity' element={<MoviesPopulity/>}/>
          <Route path='/movies' element={<Movies />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
