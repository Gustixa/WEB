import React from 'react'
import { welcome } from './Welcome.module.css'
import { navigate } from '@pages'
import { useHistory, Link } from 'react-router-dom'

export default function Welcome() {
  const history = useHistory
  history.push('/')
  return (

    <div className={welcome} onClick={() => navigate('maze')}>WELCOM PAGE</div>
  )
}
