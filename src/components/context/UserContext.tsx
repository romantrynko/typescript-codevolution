import { createContext, Dispatch, ReactNode, useState } from "react"

export type AuthUser = {
  name: string
  email: string
}

type UserContextProviderProps = {
  children: ReactNode
}

type UserContextType = {
  user: AuthUser | null
  setUser: Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
}