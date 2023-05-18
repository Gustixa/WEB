import React, { Component } from 'react'
import Display from '@components/display'
import PanelBotones from '@components/panelBotones'
import operaciones from '@logic/operations/operaciones'
import styles from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      siguiente: null,
    }
  }

  handleClick = (nombreBoton) => this.setState((prevState) => operaciones(prevState, nombreBoton))

  render() {
    const { siguiente, total } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.calculator}>
          <Display
            value={siguiente || total || '0'}
          />
          <PanelBotones clickHandle={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App
