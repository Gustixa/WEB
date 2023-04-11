import Maze from './Maze'
import Welcome from './Welcome'
import Win from './Win'
import React from 'react'
import { Switch, Route, Routes, useHistory } from 'react-router-dom'

const navigate = (page) => {
  window.location = `/?route=${page}`
}
export default function Page () {
  const history = useHistory()
  // Escoger la pagina
  return (
    <Switch>
      <Routes>
        <Route path="/win">
          <Win history={history}/>
        </Route>
      </Routes>
      <Routes>
        <Route path="/">
          <Welcome />
        </Route>
      </Routes>
      <Routes>
        <Route path="/maze">
          <Maze history={history}/>
        </Route>
      </Routes>
    </Switch>
    
  )
}
export { navigate }
