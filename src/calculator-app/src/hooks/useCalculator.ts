import { useState } from 'react'

type Operation = '+' | '-' | '*' | '/' | '%' | null

interface CalculatorState {
  display: string
  previousValue: number | null
  operation: Operation
  waitingForOperand: boolean
}

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

function formatResult (num: number): string {
  if (!isFinite(num) || num < 0 || num > MAX_VALUE) return 'ERROR'
  const str = num.toString()
  if (str.length > MAX_DIGITS) return str.slice(0, MAX_DIGITS)
  return str
}

function calculate (a: number, b: number, op: Operation): number {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return b === 0 ? Infinity : a / b
    case '%': return a % b
    default: return b
  }
}

export function useCalculator () {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  })

  const inputDigit = (digit: string) => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return { ...prev, display: digit, waitingForOperand: false }
      }
      if (prev.display === 'ERROR') return prev
      if (prev.display.replace('.', '').replace('-', '').length >= MAX_DIGITS) return prev
      const newDisplay = prev.display === '0' ? digit : prev.display + digit
      return { ...prev, display: newDisplay }
    })
  }

  const inputDecimal = () => {
    setState(prev => {
      if (prev.waitingForOperand) {
        return { ...prev, display: '0.', waitingForOperand: false }
      }
      if (prev.display.includes('.')) return prev
      if (prev.display.length >= MAX_DIGITS) return prev
      return { ...prev, display: prev.display + '.' }
    })
  }

  const inputOperation = (op: Operation) => {
    setState(prev => {
      if (prev.display === 'ERROR') return prev
      const current = parseFloat(prev.display)
      if (prev.previousValue !== null && !prev.waitingForOperand) {
        const result = calculate(prev.previousValue, current, prev.operation)
        const display = formatResult(result)
        return { display, previousValue: display === 'ERROR' ? null : result, operation: op, waitingForOperand: true }
      }
      return { ...prev, previousValue: current, operation: op, waitingForOperand: true }
    })
  }

  const calculate_result = () => {
    setState(prev => {
      if (prev.previousValue === null || prev.operation === null) return prev
      const current = parseFloat(prev.display)
      const result = calculate(prev.previousValue, current, prev.operation)
      const display = formatResult(result)
      return { display, previousValue: null, operation: null, waitingForOperand: true }
    })
  }

  const toggleSign = () => {
    setState(prev => {
      if (prev.display === 'ERROR' || prev.display === '0') return prev
      if (prev.display.startsWith('-')) {
        return { ...prev, display: prev.display.slice(1) }
      }
      if (prev.display.length >= MAX_DIGITS) return prev
      return { ...prev, display: '-' + prev.display }
    })
  }

  const clear = () => {
    setState({ display: '0', previousValue: null, operation: null, waitingForOperand: false })
  }

  return {
    display: state.display,
    operation: state.operation,
    inputDigit,
    inputDecimal,
    inputOperation,
    calculate_result,
    toggleSign,
    clear,
  }
}