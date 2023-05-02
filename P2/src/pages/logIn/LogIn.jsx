import React, { useState } from 'react'
import { Stack, TextField, Button } from '@mui/material'
import './LogIn.css'
import GoogleIcon from '@mui/icons-material/Google';

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

const LogIn = () => {

  return (
    <div className="Box">
      <div className="logIn-container">
        <form action="">
          <h1 className="tittle">Iniciar Sesión</h1>
          <Stack spacing={3} direction="column">
            <TextField
              id="email"
              type="email"
              variant="outlined"
              label="Correo electronico"/>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              label="Contraseña"
            />
            <Button
              sx={hoverButtons}
              type="submit"
              variant="outlined"
              >
              Iniciar Sesión
            </Button>
            <Button
              sx={hoverButtons}
              startIcon={<GoogleIcon sx={firstIcon}/>}
              variant="outlined"
            >
              Iniciar Sesión con Google
            </Button>
            <Button
              type="submit"
              variant="text"
              >
              ¿No tiene cuenta? ¡Cree una!
            </Button>
          </Stack>
        </form>
      </div>
    </div>
    
  )
}

export default LogIn