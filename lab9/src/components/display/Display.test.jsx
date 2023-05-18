import React from 'react'
import { render, screen } from '@testing-library/react'
import Display from './Display'

describe('Resultado', () => {
  it('Debe mostrar el resultado de la calculadora en un div', () => {
    render(<Display value={4} />)
    expect(screen.getByTestId('resultado')).toHaveTextContent('4')
  })

  it('Debe mostrar el mensaje de error para valores negativos', () => {
    render(<Display value={-1} />)
    expect(screen.getByTestId('resultado')).toHaveTextContent('Error: El valor no puede ser negativo.')
  })

  it('Debe mostrar el mensaje de error para texto con más de 9 caracteres', () => {
    render(<Display value="1234567890" />)
    expect(screen.getByTestId('resultado')).toHaveTextContent('Error: El texto tiene más de 9 caracteres.')
  })
})
