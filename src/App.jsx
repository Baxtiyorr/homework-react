import { useState } from 'react'
import './App.css'
import MenuBar from './componnents/header/header.jsx'
import Modal from './componnents/modal/modal'
import RandomImage from './componnents/randomizer/random-img'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuBar/>
      <Modal/>
      <RandomImage/>
    </>
  )
}

export default App
