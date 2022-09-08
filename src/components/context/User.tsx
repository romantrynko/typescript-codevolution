import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
  const { user, setUser } = useContext(UserContext)

  const handleLogin = () => {
    setUser({
      name: 'Roman',
      email: 'email@roman.com'
    })

  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user &&
        <div>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </div>
      }
    </div>
  )
}
