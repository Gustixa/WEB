import React from 'react'
import Boton from '@components/boton'
import PropTypes from 'prop-types'
import styles from './PanelBotones.module.css'

export default function PanelBotones({ clickHandle }) {
  const handleClick = (nombreBoton) => clickHandle(nombreBoton)
  return (
    <div className={styles.cuadroTeclas}>
      <div>
        <Boton name="AC" clickHandle={handleClick} />
        <Boton name="+/-" clickHandle={handleClick} />
        <Boton name="%" clickHandle={handleClick} />
        <Boton name="÷" clickHandle={handleClick} />
      </div>
      <div>
        <Boton name="7" clickHandle={handleClick} />
        <Boton name="8" clickHandle={handleClick} />
        <Boton name="9" clickHandle={handleClick} />
        <Boton name="x" clickHandle={handleClick} />
      </div>
      <div>
        <Boton name="4" clickHandle={handleClick} />
        <Boton name="5" clickHandle={handleClick} />
        <Boton name="6" clickHandle={handleClick} />
        <Boton name="-" clickHandle={handleClick} />
      </div>
      <div>
        <Boton name="1" clickHandle={handleClick} />
        <Boton name="2" clickHandle={handleClick} />
        <Boton name="3" clickHandle={handleClick} />
        <Boton name="+" clickHandle={handleClick} />
      </div>
      <div>
        <Boton name="0" clickHandle={handleClick} />
        <Boton name="." clickHandle={handleClick} />
        <Boton name="=" clickHandle={handleClick} />
      </div>
    </div>
  )
}

PanelBotones.propTypes = {
  clickHandle: PropTypes.func.isRequired,
}
