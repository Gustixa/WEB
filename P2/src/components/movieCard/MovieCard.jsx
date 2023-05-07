import React from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard ({movie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
  return (
    <li className="movieCard">
      <Link to={"/movies/"+movie.id}>
        <img 
          className="movieImage"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title} />
        <div className="title">{movie.title}</div>
      </Link>
    </li>
  )
}