import { Route, Routes } from "react-router-dom"
import Root from "./routes/root"
import About from "./routes/About"
import NavBar from "./Components/NavBar"
import Careers from "./routes/Careers"

function App() {
 

  return (
    <div>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Root/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/careers' element={<Careers/>}/>
      </Routes>

    </div>
  )
}

export default App
