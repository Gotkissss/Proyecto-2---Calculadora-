interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'number' | 'operator' | 'equal' | 'clear' | 'sign'
}

function Button ({ label, onClick, variant = 'number' }: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  )
}

export default Button
