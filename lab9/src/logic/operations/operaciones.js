import Big from 'big.js'
import operate from '@logic/symbolsOperations/operate'
import isNumber from '@logic/numberValidation/isNumber'

export default function operaciones(estado, nombreBoton) {
  if (nombreBoton === 'AC') {
    return {
      total: null,
      siguiente: null,
      operador: null,
    }
  }
  if (isNumber(nombreBoton)) {
    if (nombreBoton === '0' && estado.siguiente === '0') {
      return {}
    }
    if (estado.operador) {
      if (estado.siguiente) {
        return { siguiente: estado.siguiente + nombreBoton }
      }
      return { siguiente: nombreBoton }
    }
    if (estado.siguiente) {
      const siguiente = estado.siguiente === '0' ? nombreBoton
        : estado.siguiente + nombreBoton
      return { siguiente, total: null }
    }
    return { siguiente: nombreBoton, total: null }
  }

  if (nombreBoton === '/') {
    if (estado.siguiente && estado.siguiente) {
      const result = operate(estado.total, estado.siguiente, estado.operador)
      return {
        total: Big(result).div(Big('100').toString()),
        siguiente: null,
        operador: null,
      }
    }

    if (estado.siguiente) {
      return { siguiente: Big(estado.siguiente).div(Big('100').toString()) }
    }
    return {}
  }

  if (nombreBoton === '.') {
    if (estado.siguiente) {
      if (estado.siguiente.includes('.')) return {}
      return { siguiente: `${estado.siguiente}.` }
    }
    return { siguietne: '0.' }
  }

  if (nombreBoton === '=') {
    if (estado.siguiente && estado.operador) {
      return {
        total: operate(estado.total, estado.siguiente, estado.operador),
        siguiente: null,
        operador: null,
      }
    }
    return {}
  }

  if (nombreBoton === '+/-') {
    if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente).toString()) }
    if (estado.total) return { total: -1 * parseFloat(estado.total).toString() }
    return {}
  }

  if (estado.operador) {
    return {
      total: operate(estado.siguiente, estado.total, estado.operador),
      siguiente: null,
      operador: nombreBoton,
    }
  }
  if (!estado.siguiente) return { operador: nombreBoton }

  return {
    total: estado.siguiente,
    siguiente: null,
    operador: nombreBoton,
  }
}
