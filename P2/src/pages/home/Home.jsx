import React from 'react'
import ContextMovieCard from '@components/contextMovieCard/ContextMovieCard'
import {useAuth} from '@authentication/AuthContext'
import { useNavigate } from 'react-router-dom'
import {Button} from '@mui/material'
import styles from './Home.module.css'



const Home = () => {
  const { user, logOut } = useAuth()
  
  const navigate = useNavigate()

  const handleLogOut = async () => {
    await logOut()
    navigate("logIn")
  }
  return (
    <div>
      <h1 className={styles.User}>Welcome {user.email}</h1>
      <Button 
        onClick={handleLogOut}
      >
        LogOut
      </Button>
      <ContextMovieCard>

      </ContextMovieCard>
    </div>
  )
}

export default Home