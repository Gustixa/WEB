import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from '@pages/home'
import LogIn from '@pages/logIn'
import SignIn from '@pages/signIn'
import MovieDetails from '@pages/movieDetails'

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/logIn" element={<LogIn/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}