import React from 'react'
import './Player.css'
import PropTypes from 'prop-types'

export default function Player({ skin}) {
  return(
    <div>
      <img src={skin} alt="Player" />
    </div>
  )
}

Player.PropTypes = {
  skin: PropTypes.string
}