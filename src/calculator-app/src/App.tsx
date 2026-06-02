import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'
import { useCalculator } from './hooks/useCalculator'
import './index.css'

function App () {
  const calc = useCalculator()

  return (
    <div className="calculator" role="main" aria-label="calculator">
      <Display value={calc.display} operation={calc.operation} />
      <Keyboard
        onDigit={calc.inputDigit}
        onOperation={calc.inputOperation}
        onEqual={calc.calculate_result}
        onClear={calc.clear}
        onDecimal={calc.inputDecimal}
        onSign={calc.toggleSign}
      />
    </div>
  )
}

export default App
