import {Routes,Route} from "react-router-dom"
import Dogcost from "../Components/Dogcost"
import Catcost from "../Components/Catcost"
import Booking from "../Components/Booking"
import Home from "../Components/Home"
import Breeds from "../Components/Breeds"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Register from "../Components/Register"
import Thanku from '../Components/Thanku'
import Doggcost from "../Components/Doggcost"
import Petgrooming from "../Components/Petgrooming"
const Render = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/breed' element={<Breeds/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
        <Route path='/dogcost' element={<Dogcost/>}></Route>
        <Route path="/catcost" element={<Catcost/>}></Route>
        <Route path='/doggcost' element={<Doggcost/>}></Route>
        <Route path="/booking" element={<Booking/>}></Route>
        <Route path="/thanku" element={<Thanku/>}></Route>
        <Route path="/petgrooming" element={<Petgrooming/>}></Route>

      </Routes>
    </div>
  )
}

export default Render
