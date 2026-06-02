import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
  it('displays 0 on init', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  it('inputs a digit correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('5') })
    expect(result.current.display).toBe('5')
  })

  it('concatenates multiple digits', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('1') })
    act(() => { result.current.inputDigit('2') })
    act(() => { result.current.inputDigit('3') })
    expect(result.current.display).toBe('123')
  })

  it('limits display to 9 characters', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { '123456789999'.split('').forEach(d => result.current.inputDigit(d)) })
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('adds two numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.inputOperation('+') })
    act(() => { result.current.inputDigit('4') })
    act(() => { result.current.calculate_result() })
    expect(result.current.display).toBe('7')
  })

  it('subtracts two numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('9') })
    act(() => { result.current.inputOperation('-') })
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.calculate_result() })
    expect(result.current.display).toBe('6')
  })

  it('multiplies two numbers correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('6') })
    act(() => { result.current.inputOperation('*') })
    act(() => { result.current.inputDigit('7') })
    act(() => { result.current.calculate_result() })
    expect(result.current.display).toBe('42')
  })

  it('shows ERROR for negative result', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.inputOperation('-') })
    act(() => { result.current.inputDigit('9') })
    act(() => { result.current.calculate_result() })
    expect(result.current.display).toBe('ERROR')
  })

  it('shows ERROR when result exceeds 999999999', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { '999999999'.split('').forEach(d => result.current.inputDigit(d)) })
    act(() => { result.current.inputOperation('+') })
    act(() => { result.current.inputDigit('1') })
    act(() => { result.current.calculate_result() })
    expect(result.current.display).toBe('ERROR')
  })

  it('clears display on C', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('9') })
    act(() => { result.current.clear() })
    expect(result.current.display).toBe('0')
  })

  it('toggles sign correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('5') })
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('-5')
  })

  it('handles decimal input', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputDigit('3') })
    act(() => { result.current.inputDecimal() })
    act(() => { result.current.inputDigit('5') })
    expect(result.current.display).toBe('3.5')
  })
})
