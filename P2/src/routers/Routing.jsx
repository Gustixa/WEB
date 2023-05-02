import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from '@pages/home/Home'
import LogIn from '@pages/logIn/LogIn'
import SignIn from '@pages/signIn/SignIn'

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LogIn/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}