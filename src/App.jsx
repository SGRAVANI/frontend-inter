//import { useState } from 'react'
import Header from "./Components/Header"
import { Routes,Route, Outlet } from "react-router-dom"
import Skills from "./Components/Skills"
import Certificates from "./Components/Certificates"
import Education from "./Components/Education"
import ProfileSummary from "./Components/ProfileSummary"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div >
    <Header/>
    <Outlet/>
    
    <div className="px-10 md:px-30 mx-auto">
    
    </div>
    <Routes>
      <Route path="/" element={<ProfileSummary/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/cert" element={<Certificates/>} />
      <Route path="education" element={<Education/>} />
    </Routes>
    </div>
    
  )
}

export default App
