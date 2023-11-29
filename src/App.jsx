import { BrowserRouter } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import CountriesData from './components/CountriesData'


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <main>
      <CountriesData/>
    </main>
    </BrowserRouter>
  )
}

export default App
