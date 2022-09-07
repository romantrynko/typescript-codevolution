import React, { ChangeEvent } from 'react'

type InputProps = {
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input type='text' value={value} onChange={handleChange} />
  )
}
