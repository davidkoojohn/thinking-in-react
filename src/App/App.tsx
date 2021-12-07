import { useState } from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import FilterableProductTable from "../view/FilterableProductTable/FilterableProductTable";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite + React!</p>
      </header>
      <main>
        <FilterableProductTable />
      </main>
    </div>
  )
}

export default App
