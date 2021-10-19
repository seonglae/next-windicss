import React, { MouseEventHandler } from 'react'

const Card: React.FC<{ m?: string; text: string; p?: string; onClick?: MouseEventHandler<HTMLButtonElement> }> = ({
  p = 'y-2 x-4',
  text,
  onClick,
  m,
}) => {
  return (
    <button
      transition="colors"
      m={m}
      bg="blue-500 hover:blue-700 dark:hover:blue-900"
      className="rounded"
      text="white"
      font="bold"
      onClick={onClick}
      p={p}>
      {text}
    </button>
  )
}

export default Card
