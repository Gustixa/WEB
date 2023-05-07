import React, { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import './SignIn.css'
import {useAuth} from '@authentication/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const hoverButtons = {
  '&:hover':{
    backgroundColor: 'rgba(1, 167, 245, 0.3)',
    color:'black',
    transition:'0s'
  }
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
  const [emailRegister, setEmailRegister] = useState("")
  const [passwordRegister, setPasswordRegister] = useState("")
  const [error, setError] = useState()

  const validatePassword = (password) =>{
    return password.length >= 6
  }

  const navigate = useNavigate()
  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleRegister = (e) => {
    e.preventDefault()
    setError("")
    if(passwordRegister.length < 6 || !validateEmail(emailRegister)){
      return
    }
    try {
      auth.signUp(emailRegister, passwordRegister)
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  const handleGoogle = (e) => {
    e.preventDefault()
    try {
      auth.logInWithGoogle()
      navigate("/")
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className="Box">
      <div className="register-container">
        <form>
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
              />
            <TextField
              id="password"
              type="password"
              variant="outlined"
              label="Contraseña"
              onChange={
                (e) => setPasswordRegister(e.target.value)
              }
              error={!validatePassword}
            helperText="La contraseña debe tener al menos 6 caracteres"
             
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
              startIcon={<GoogleIcon sx={firstIcon}/>}
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