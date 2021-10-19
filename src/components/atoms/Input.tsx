import React, { useEffect, useRef, MutableRefObject } from 'react'

const Input: React.FC<{
  bind?: MutableRefObject<string>
  autoFocus?: true
  m?: string
  w?: string
  label: string
  id: string
  type: string
}> = ({ w, label, autoFocus, id, type, m, bind }) => {
  const input = useRef(null)
  useEffect(() => autoFocus && input.current && input.current.focus(), [input, autoFocus])
  return (
    <div m={m}>
      <label className="block font-bold mb-2">{label}</label>
      <input
        ref={input}
        className="rounded border"
        p="3"
        w={w}
        border="gray-300 dark:gray-500"
        bg="white dark:dark-500"
        id={id}
        type={type}
        onChange={value => bind && (bind.current = value.target.value)}
        transition="colors"
        placeholder={label}
      />
    </div>
  )
}

export default Input
