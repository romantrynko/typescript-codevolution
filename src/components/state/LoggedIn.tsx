import { useState } from "react"

export const LoggedIn = () => {
  const [isLoggedIn, setIsLogedIn] = useState<boolean>();

  const handleLogin = () => setIsLogedIn(true)
  const handleLogout = () => setIsLogedIn(false)

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
