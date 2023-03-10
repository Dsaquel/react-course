import { useState } from 'react'
import Movie from '../components/movie/Movie'

const Movies = () => {
  const [movies, setMovies] = useState(['je', 'suis', 'moche'])
  const [movieInput, setMovieInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const moviesTemp = [...movies]
    moviesTemp.push(movieInput)
    setMovies(moviesTemp)
    setMovieInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Arrays</h1>
        <input
          type="text"
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
        />
        <button type="submit">Ajouter un movie</button>
      </form>
      <div>
        {movies.map((movieName, i) => {
          return <Movie movieName={movieName} key={i} />
        })}
      </div>
    </div>
  )
}

export default Movies
