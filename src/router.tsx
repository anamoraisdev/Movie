import { BrowserRouter, Route, Routes} from "react-router-dom"
import Movies from "./pages/movies"
import PageBase from "./pages/PageBase"
import Series from "./pages/series"
import Home from "./pages/Home"
import Person from "./pages/person"
import Favorites from "./pages/Favorite"



function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<PageBase/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='movies/:id?' element={<Movies />}/>
          <Route path="series/:id?" element={<Series/>}/>
          <Route path="/person" element={<Person/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
