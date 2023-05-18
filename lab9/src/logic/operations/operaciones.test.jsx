import { render, screen } from '@testing-library/react'
import operaciones from './operaciones'

describe('Operaciones', () => {
  test('AC button resets the state', () => {
    const initialState = {
      total: '10',
      siguiente: '5',
      operador: '+',
    }
    const result = operaciones(initialState, 'AC')
    expect(result).toEqual({
      total: null,
      siguiente: null,
      operador: null,
    })
  })

  test('Equal button performs correct calculation', () => {
    const initialState = {
      total: '10',
      siguiente: '5',
      operador: '+',
    }
    const result = operaciones(initialState, '=')
    expect(result).toEqual({
      total: '15',
      siguiente: null,
      operador: null,
    })
  })

  test('Operator button updates the state correctly', () => {
    const initialState = {
      total: null,
      siguiente: '5',
      operador: null,
    }
    const result = operaciones(initialState, '+')
    expect(result).toEqual({
      total: '5',
      siguiente: null,
      operador: '+',
    })
  })

  test('Number button with zero clears the state', () => {
    const initialState = {
      total: null,
      siguiente: '0',
      operador: null,
    }
    const result = operaciones(initialState, '0')
    expect(result).toEqual({})
  })
})
