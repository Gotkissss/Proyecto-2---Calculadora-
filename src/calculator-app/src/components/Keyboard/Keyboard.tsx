import Button from '../Button/Button'

interface KeyboardProps {
  onDigit: (d: string) => void
  onOperation: (op: '+' | '-' | '*' | '/' | '%') => void
  onEqual: () => void
  onClear: () => void
  onDecimal: () => void
  onSign: () => void
}

function Keyboard ({ onDigit, onOperation, onEqual, onClear, onDecimal, onSign }: KeyboardProps) {
  return (
    <div className="keyboard" role="group" aria-label="calculator keyboard">
      <Button label="C" onClick={onClear} variant="clear" />
      <Button label="+/-" onClick={onSign} variant="sign" />
      <Button label="%" onClick={() => onOperation('%')} variant="operator" />
      <Button label="÷" onClick={() => onOperation('/')} variant="operator" />

      <Button label="7" onClick={() => onDigit('7')} />
      <Button label="8" onClick={() => onDigit('8')} />
      <Button label="9" onClick={() => onDigit('9')} />
      <Button label="×" onClick={() => onOperation('*')} variant="operator" />

      <Button label="4" onClick={() => onDigit('4')} />
      <Button label="5" onClick={() => onDigit('5')} />
      <Button label="6" onClick={() => onDigit('6')} />
      <Button label="-" onClick={() => onOperation('-')} variant="operator" />

      <Button label="1" onClick={() => onDigit('1')} />
      <Button label="2" onClick={() => onDigit('2')} />
      <Button label="3" onClick={() => onDigit('3')} />
      <Button label="+" onClick={() => onOperation('+')} variant="operator" />

      <Button label="0" onClick={() => onDigit('0')} />
      <Button label="." onClick={onDecimal} />
      <Button label="=" onClick={onEqual} variant="equal" />
    </div>
  )
}

export default Keyboard