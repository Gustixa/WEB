import React from 'react'
import placeHolder from '@img/placeHolder.png'

export default function getMovieImg(path, width){
  return path? `https://image.tmdb.org/t/p/w${width}${path}`: placeHolder
}