import React from 'react'
import { Button } from '@mui/material'
import { PropTypes } from 'prop-types'

const buttonStyle = {
  color: 'white',
  backgroundColor: 'black',
  margin: '10px',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
}

export default function Boton({ name, clickHandle }) {
  const handleClick = () => clickHandle(name)
  return (
    <div>
      <Button sx={buttonStyle} onClick={handleClick}>{name}</Button>
    </div>
  )
}

Boton.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandle: PropTypes.func.isRequired,
}
