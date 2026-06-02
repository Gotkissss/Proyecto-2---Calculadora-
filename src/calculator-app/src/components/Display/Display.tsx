interface DisplayProps {
  value: string
  operation: string | null
}

function Display ({ value, operation }: DisplayProps) {
  return (
    <div className="display" aria-label="calculator display" role="region">
      <span className="display__operation">{operation ?? ''}</span>
      <span className="display__value">{value}</span>
    </div>
  )
}

export default Display
