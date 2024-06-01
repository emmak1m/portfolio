import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <h1>Hello, I'm Emma</h1>
    </>
  )
}

export default App
