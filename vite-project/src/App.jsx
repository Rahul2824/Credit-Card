import { Routes, Route } from "react-router-dom";
import About from './About'
import Logine from './Logine'
import OTP from "./OTP";
import './App.css'
import Aboutyou from "./Aboutyou";
import Location from "./Location";
import Contact from "./Contact";
import Documeentuplod from "./Documentuplod"
import Sucess from "./Sucess"
import Info from "./Info";
function App() {


  return (
    <>
      <Routes>
        <Route path="/Logine" element={<Logine />} />
        <Route path="/" element={<About />} />
        <Route path="/OTP" element={<OTP/>} />
        <Route path="/Aboutyou" element={<Aboutyou/>}/>
        <Route path="/Location" element={<Location/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Documeentuplod" element={<Documeentuplod/>}/>
        <Route path="/Sucess" element={<Sucess/>}/>
        <Route path="/Info" element={<Info/>}/>
      </Routes>


    </>
  )
}

export default App
