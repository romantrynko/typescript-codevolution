import { ComponentType } from "react"
import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivatProps = {
  isLoggedIn: boolean
  component: ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivatProps) => {
  if (isLoggedIn) { return (<Component name='Roman' />) }
  else { return (<Login />) }
}
