import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layuot__main from './components/Layuot__main'
import Bookmarks from './components/Bookmarks'
import Explore from './components/Explore'
import Notifications from './components/Notifications'
import Messages from './components/Messages'
import Lists from './components/Lists'
import Profile from './components/Profile'
import More from './components/More'
import UserData from './components/UserData'
import Layout from './components/Layout'
import Register from './components/register/Register'
import Login from './components/login/login'



function App() {

  const isLoggedIn = localStorage.getItem('email') && localStorage.getItem('password');
  return (
    <BrowserRouter>
    
    <main className='layout'>
      
      <Routes>
        <Route element={<Layout/>}>

        <Route path='/' element={<Layuot__main/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/lists' element={<Lists/>}/>
    
        <Route path='/more' element={<More/>}/>
        {isLoggedIn ? <Route path='/profile' element={<Profile/>} /> : <Route path='/profile' element={<Navigate to='/register' />} />}
        </Route>


      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>

      <UserData/>
    </main>
    </BrowserRouter>
  )
}

export default App
