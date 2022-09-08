import { ComponentProps } from "react"

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string
} & Omit<ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-width-${variant}`} {...rest}>
      {children}
    </button>
  )
}
