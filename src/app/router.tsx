import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "../pages/movies"
import Home from "../pages/home"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
