import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AuthProvider } from './context/authContext'
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
