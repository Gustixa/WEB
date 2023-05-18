import React from 'react'
import { render } from '@testing-library/react'
import Boton from './Boton'

describe('Panel botones', () => {
  it('Can be clicked', () => {
    const spy = vi.fn()
    render(<Boton clickHandle={spy} />)
  })
})
