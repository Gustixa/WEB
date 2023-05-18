import React, { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import './SignIn.css'
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

export default function SignIn() {
  const auth = useAuth()
  const [emailRegister, setEmailRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')

  const [errorMessage, setErroMessage] = useState('')

  const [passwordError, setPasswordError] = useState('')
  const [passwordValidation, setPasswordValidation] = useState(false)

  const [emailError, setEmailError] = useState('')
  const [emailValidation, setEmailValidation] = useState(false)

  const navigate = useNavigate()

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  // Verifying if the user and password are validates when press the register button
  const handleRegister = async (e) => {
    e.preventDefault()
    if (passwordRegister.length < 6) {
      setPasswordError('La contraseña debe poseer 6 caracteres')
      setPasswordValidation(passwordRegister.length < 6)
      return
    } if (!validateEmail(emailRegister)) {
      setEmailError('Correo no valido')
      setEmailValidation(true)
    }

    try {
      await auth.signUp(emailRegister, passwordRegister)
      navigate('/')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setEmailError('Usuario (correo) ya utilizado')
        setEmailValidation(true)
      }
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
      <div className="register-container">
        <form>
          {errorMessage && <p>{errorMessage}</p>}
          <h1 className="tittle">Registrarse</h1>
          <Stack spacing={3} direction="column">
            <TextField
              id="email"
              type="email"
              variant="outlined"
              label="Correo electronico"
              onChange={
                (e) => setEmailRegister(e.target.value)
                }
              error={emailValidation}
              helperText={emailError}
            />
            <TextField
              id="password"
              type="password"
              variant="outlined"
              label="Contraseña"
              onChange={
                (e) => setPasswordRegister(e.target.value)
              }
              error={passwordValidation}
              helperText={passwordError}
            />
            <Button
              sx={hoverButtons}
              type="submit"
              variant="outlined"
              onClick={(e) => handleRegister(e)}
            >
              Registrase
            </Button>
            <Button
              sx={hoverButtons}
              startIcon={<GoogleIcon sx={firstIcon} />}
              variant="outlined"
              onClick={(e) => handleGoogle(e)}
              type="submit"
            >
              Registrase con Google
            </Button>
          </Stack>
          <p className="account-text">
            ¿Ya tienes cuenta?
            <Link to="/logIn" className="logIn-text">
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
