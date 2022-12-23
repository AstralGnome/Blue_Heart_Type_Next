import React from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean
  className?: string
}

const Button = ({
  text,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
