import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage/>
    </>
  )
}

export default App
