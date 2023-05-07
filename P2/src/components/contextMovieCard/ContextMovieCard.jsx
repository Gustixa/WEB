import React, { useEffect, useState} from 'react'
import get from '@API/movieAPI'
import MovieCard  from '@components/movieCard'
import './ContextMovieCard.css'

export default function ContextMovieCard() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results)
      console.log(data)
    })
  }, [])
  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  )
}