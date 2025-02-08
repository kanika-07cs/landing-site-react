import { useState } from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Destination from "./pages/Destination"
import Contact from "./pages/Contact"
import Navlinks from "./components/navlinks/Navlinks"

function App() {


  return (
      <div className="App" style={{height:"100vh",width: "100vw"}}>
        

        <Navlinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
