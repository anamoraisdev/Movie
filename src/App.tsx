import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "./features/movies/movies"
import Home from "./features/home/home"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
