import React, { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import './LogIn.css'
import GoogleIcon from '@mui/icons-material/Google'
import { useAuth } from '@authentication/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const hoverButtons = {
  '&:hover': {
    backgroundColor: 'rgba(1, 167, 245, 0.3)',
    color: 'black',
    transition: '0s',
  },
}
const firstIcon = {
  height: '25px',
  width: '25px',
  position: 'absolute',
  left: '30px',
  bottom: 0,
  top: '3px',
  alignSelf: 'flex-start',
  pointerEvents: 'none',
  display: 'flex',
}

function LogIn() {
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErroMessage] = useState('')

  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [emailValidation, setEmailValidation] = useState(false)

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [passwordValidation, setPasswordValidation] = useState(false)

  const navigate = useNavigate()

  const handleLogIn = async (e) => {
    e.preventDefault()

    try {
      await auth.logIn(email, password)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setEmailErrorMessage('Usuario no existente')
        setEmailValidation(true)
      } else if (error.code === 'auth/wrong-password') { setPasswordErrorMessage('Contraseña incorrecta') }
      setPasswordValidation(true)
    }
  }
  const handleGoogle = async (e) => {
    e.preventDefault()
    try {
      await auth.logInWithGoogle()
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErroMessage('Usuario no existente. Cree una cuenta con dicho usuario')
      }
    }
  }
  return (
    <div className="Box">
      <div className="logIn-container">
        <form action="">
          {errorMessage && <p>{errorMessage}</p>}
          <h1 className="tittle">Iniciar Sesión</h1>
          <Stack spacing={3} direction="column">
            <TextField
              id="email"
              type="email"
              variant="outlined"
              label="Correo electronico"
              onChange={
                (e) => setEmail(e.target.value)
                }
              error={emailValidation}
              helperText={emailErrorMessage}
            />
            <TextField
              id="password"
              type="password"
              variant="outlined"
              label="Contraseña"
              onChange={
                (e) => setPassword(e.target.value)
              }
              error={passwordValidation}
              helperText={passwordErrorMessage}
            />
            <Button
              size="medium"
              sx={hoverButtons}
              type="submit"
              variant="outlined"
              onClick={(e) => handleLogIn(e)}
            >
              Iniciar Sesión
            </Button>
            <Button
              sx={hoverButtons}
              startIcon={<GoogleIcon sx={firstIcon} />}
              variant="outlined"
              onClick={(e) => handleGoogle(e)}
            >
              Iniciar Sesión con Google
            </Button>
            <Button
              type="submit"
              variant="text"
            />
          </Stack>
          <p>
            ¿No tiene cuenta? ¡Cree una!
            <Link to="/signIn" className="logIn-text">
              Aquí
            </Link>
          </p>

        </form>
      </div>
    </div>

  )
}

export default LogIn
