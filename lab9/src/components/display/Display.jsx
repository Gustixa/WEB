import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './Display.module.css'

export default function Display({ value }) {
  const truncatedText = value.toString().slice(0, 10)
  const errorMessage = value < 0 ? 'Error: El valor no puede ser negativo.'
    : 'Error: El texto tiene más de 9 caracteres.'

  return (
    <div className={styles.caja}>
      <div className={styles.result} data-testid="resultado">
        {(value.toString().length <= 9 && value >= 0) ? truncatedText : errorMessage}
      </div>
    </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
}
