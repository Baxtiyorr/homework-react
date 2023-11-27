import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import HomePage from './componnents/HomePage'
import TodosPage from './componnents/TodosPage'
import AlbumsPage from './componnents/AlbumsPage'
import PostsPage from './componnents/PostsPage'
import Layout from './componnents/Layout'
import NotFoundPage from './componnents/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      
        <main>
          <Routes>
            <Route element= {<Layout/>}>
            <Route path='/' element={<HomePage />}/>
            <Route path='/todos' element={<TodosPage />}/>
            <Route path='/albums' element={<AlbumsPage />}/>
            <Route path='/posts' element={<PostsPage />}/>

            </Route>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
