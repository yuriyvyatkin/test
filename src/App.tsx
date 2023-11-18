import { useState, useEffect } from 'react'
import pickachu from './assets/pickachu.ico'
import './App.css'
import getData from "./utils/getData"

type Pokemon = {
  name: string;
  url: string;
}

function App() {
  const [data, setData] = useState<Array<Pokemon> | null>(null);

  useEffect(() => {
    const response = getData();

    response.then((data) => {
      setData(data as Array<Pokemon> | null);
    })
  }, [])

  return (
    <>
      <div>
        <a href="#0">
          <img src={pickachu} className="logo" alt="Vite logo" />
        </a>
        <a href="#0">
          <img src={pickachu} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Мои покемоны!</h1>
      <ul className="cards">
        {data && data.map((data, index) => {
          return <li key={index} className="card">
            <img src={data.url} alt={data.name} />
            <div className="pokemon-name">{data.name}</div>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
