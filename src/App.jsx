import { BrowserRouter, Route, Routes } from "react-router-dom"
import { InputProvider } from "./components/useMyContext"

import MainSection from "./components/MainSection"
import VideoPlayPage from "./components/VideoPlayPage"
import Layout from "./components/Layout"
import Register from "./components/Register"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {

 return(
  <BrowserRouter>
    
  <InputProvider>
  <Routes>
    <Route element={<Layout/>}>
       <Route path="/" element={<MainSection/>}/>
    </Route>
   
    <Route path="/video/:videoId" element={<VideoPlayPage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </InputProvider>
  
  </BrowserRouter>
 )
}

export default App
