import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout__left_side from './components/Layout__left_side'
import Layuot__main from './components/Layuot__main'
import Layuot__right_side from './components/Layuot__right_side'
import Bookmarks from './components/Bookmarks'
import Explore from './components/Explore'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import Lists from './components/Lists'
import Profile from './components/Profile'
import More from './components/More'
import UserData from './components/UserData'



function App() {

  return (
    <BrowserRouter>
    
    <main className='layout'>
      <Layout__left_side/>
      <Routes>
        <Route path='/' element={<Layuot__main/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/more' element={<More/>}/>
      </Routes>
      
      <Layuot__right_side/>
      <UserData/>
    </main>
    </BrowserRouter>
  )
}

export default App
