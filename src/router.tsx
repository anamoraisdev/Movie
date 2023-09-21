import { BrowserRouter, Route, Routes} from "react-router-dom"
import Movies from "./pages/Movies"
import PageBase from "./pages/PageBase"
import Series from "./pages/Series"
import Home from "./pages/Home"

import Favorites from "./pages/Favorite"
import People from "./pages/People"
import Person from "./pages/Person"





function Router() {

  return (
    <BrowserRouter>
      <Routes>
  
        <Route path='/'element={<PageBase/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies/:id?' element={<Movies />}/>
          <Route path="/series/:id?" element={<Series/>}/>
          <Route path="/person" element={<People/>}/>
          <Route path="/person/:id" element={<Person/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
