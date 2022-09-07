import { MouseEvent } from 'react'

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button onClick={(event) => handleClick(event, 1)}>Click</button>
  )
}