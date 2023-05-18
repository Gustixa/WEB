import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from '@pages/home'
import LogIn from '@pages/logIn'
import SignIn from '@pages/signIn'
import MovieDetails from '@pages/movieDetails'
import ProtectedRoute from './protectedRoute/ProtectedRoute'

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
        )}
        />
        <Route path="/logIn" element={<LogIn />} />
        <Route
          path="/signIn"
          element={(
            <ProtectedRoute>
              <SignIn />
            </ProtectedRoute>
        )}
        />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
