import { useState } from 'react'
import Persons from './pages/Persons'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Persons />
    </div>
  )
}

export default App
