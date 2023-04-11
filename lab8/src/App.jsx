import React from 'react'
import './App.css'
import Page from './pages'
import { BrowserRouter, useHistory } from 'react-router-dom'


function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Page/>
        </BrowserRouter>
      </React.Fragment>
    
  )
}

export default App
