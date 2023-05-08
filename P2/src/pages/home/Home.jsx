import React from 'react'
import ContextMovieCard from '@components/contextMovieCard/ContextMovieCard'
import styles from './Home.module.css'
import NavBar from '@components/navBar'

const Home = () => {

  return (
    <div>
      <NavBar/>
      <ContextMovieCard>

      </ContextMovieCard>
    </div>
  )
}

export default Home