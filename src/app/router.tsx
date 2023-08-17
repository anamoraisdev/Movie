import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "../pages/movies"
import PageBase from "../pages/PageBase"
import Series from "../pages/series"
import Home from "../pages/Home"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<PageBase/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path="/series" element={<Series/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
