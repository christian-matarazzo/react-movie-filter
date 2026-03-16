import './App.css'
import { useState, useEffect } from "react"
const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
function App() {
  const [genre, setGenre] = useState("")
  const [filteredGenre, setFilteredGenre] = useState(movies)

  useEffect(() => {
    if (genre === "") {
      setFilteredGenre(movies)
    }
    else {
      setFilteredGenre(movies.filter(movie => (movie.genre === genre)))
    }
  }, [genre, movies])



  return (
    <>
      <div className="container">
        <h1>Questa è la tua lista di film</h1>
          <select value={genre} name="movies" id="movies" onChange={(e) => setGenre(e.target.value)}>
          <option value="">Seleziona un genere per filtrare</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
        <ul>
          {filteredGenre.map(movie => (
            
            
            <li key={movie.title}>Titolo del film: {movie.title} - Genere: {movie.genre}</li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App
