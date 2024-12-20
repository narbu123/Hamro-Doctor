import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MyPofile from "./pages/MyPofile"
import MyAppointments from "./pages/MyAppointments"
import Appointment from "./pages/Appointment"
import Navbar from "./compnents/navbar"
import Footer from "./compnents/Footer"

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyPofile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docID' element={<Appointment />} />

      </Routes>
      <Footer />
      
    </div>
  )
}
export default App
