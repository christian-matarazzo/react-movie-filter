import './App.css'
import { useState, useEffect } from "react"
function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]


  return (
    <>
      <div className="container">
        <h1>Questa è la tua lista di film</h1>
        <ul>
          {movies.map(movie => (<li>Titolo del film: {movie.title} - Genere: {movie.genre}</li>))}
        </ul>
      </div>
    </>
  )
}

export default App
