import React, { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Routing from './routers/Routing'

function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <AuthProvider>
      <Routing></Routing>
    </AuthProvider>
  )
}

export default App
