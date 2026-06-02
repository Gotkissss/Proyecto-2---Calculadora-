import Button from '../Button/Button'

interface KeyboardProps {
  onDigit: (d: string) => void
  onOperation: (op: '+' | '-' | '*' | '/' | '%') => void
  onEqual: () => void
  onClear: () => void
  onDecimal: () => void
  onSign: () => void
}

const getKeys = (p: KeyboardProps) => [
  { label: 'C', action: p.onClear, variant: 'clear' as const },
  { label: '+/-', action: p.onSign, variant: 'sign' as const },
  { label: '%', action: () => p.onOperation('%'), variant: 'operator' as const },
  { label: '÷', action: () => p.onOperation('/'), variant: 'operator' as const },
  { label: '7', action: () => p.onDigit('7') },
  { label: '8', action: () => p.onDigit('8') },
  { label: '9', action: () => p.onDigit('9') },
  { label: '×', action: () => p.onOperation('*'), variant: 'operator' as const },
  { label: '4', action: () => p.onDigit('4') },
  { label: '5', action: () => p.onDigit('5') },
  { label: '6', action: () => p.onDigit('6') },
  { label: '-', action: () => p.onOperation('-'), variant: 'operator' as const },
  { label: '1', action: () => p.onDigit('1') },
  { label: '2', action: () => p.onDigit('2') },
  { label: '3', action: () => p.onDigit('3') },
  { label: '+', action: () => p.onOperation('+'), variant: 'operator' as const },
  { label: '0', action: () => p.onDigit('0') },
  { label: '.', action: p.onDecimal },
  { label: '=', action: p.onEqual, variant: 'equal' as const },
]

function Keyboard (props: KeyboardProps) {
  return (
    <div className="keyboard" role="group" aria-label="calculator keyboard">
      {getKeys(props).map(k => (
        <Button key={k.label} label={k.label} onClick={k.action} variant={k.variant} />
      ))}
    </div>
  )
}

export default Keyboard