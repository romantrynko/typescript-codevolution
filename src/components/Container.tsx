import { CSSProperties } from "react"

type ContainerProps = {
  styles: CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}>
      Container
    </div>
  )
}
