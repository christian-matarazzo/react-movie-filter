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
  const [selectedMovie, setSelectedMovie] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    const searchResult = movies.filter(movie => movie.title.toLowerCase().includes(selectedMovie.toLowerCase()))
    setFilteredGenre(searchResult)
    setSelectedMovie("")
  }


  return (
    <>
      <header>
        <h1 className="title text-center text-white"> Cineplex Movie List Filter 🍿</h1>
      </header>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Inserisci nome del film..."
              className="search"
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
            />
            <button type="submit" className="button mx-1">Cerca</button>
          </form>

          <select value={genre} name="movies" id="movies" onChange={(e) => setGenre(e.target.value)} className="form-select my-4" >
            <option value="">Seleziona un genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
          {filteredGenre.map(movie => (
            <table key = {movie.title} className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Genere</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </main>
      <footer>
        <div className="footer text-center text-white">
          <span className="span h6">© Cineplex Movie List 2026 --- Made with some heachache by Christian Matarazzo</span>
        </div>
      </footer>


    </>
  )

}
export default App
