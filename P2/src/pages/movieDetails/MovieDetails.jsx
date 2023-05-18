import React, { useState, useEffect } from 'react'
import get from '@API/movieAPI'
import { useParams } from 'react-router-dom'
import getMovieImg from '@utils/movieImg/'

import './MovieDetails.css'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const [generos, setGeneros] = useState([])
  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data)
      setGeneros(data.genres[0])
    })
  }, [movieId])

  const imagenUrl = getMovieImg(movie.poster_path, 500)

  return (
    <div className="detailsContainer">
      <img
        className="col movieImage"
        src={imagenUrl}
        alt={movie.title}
      />
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descricpión: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  )
}
