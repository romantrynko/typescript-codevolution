import React, { ComponentProps } from 'react'
import { Greet } from '../Greet'

export const CutomComponent = (props: ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}
