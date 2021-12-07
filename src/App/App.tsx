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
        <p>Hello Vite + React!</p>
      </header>
      <main>
        <p>
          <button
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <FilterableProductTable />
      </main>
    </div>
  )
}

export default App
