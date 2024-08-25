import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Compoments/Header'
import Filter from './Compoments/Filter'
import Listproduct from './Compoments/Listproduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <Header />

      <Filter />
    </div>
    <div className="e">
        <h2 id='gift'>Quà tặng</h2>
        <button id='create'>Tạo</button>
      </div>
      <Listproduct/>
    </>
  )
}

export default App
