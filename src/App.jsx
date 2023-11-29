import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ArticlesData from './components/ArticlesData'
import DetailsPage from './components/DetailsPage'


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Routes>
        <Route path='/articles' element={<ArticlesData/>}/>
        <Route path='/details/:detailsId' element={<DetailsPage />}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App
