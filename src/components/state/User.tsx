import { useState } from "react";

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => setUser({
    name: "Roman",
    email: "roman@ex.om"
  })

  // const handleLogout = () => setUser(null)

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {
        user && <div>
          <h1>User name is {user.name}</h1>
          <h4>User email is {user.email}</h4>
        </div>
      }
    </div>
  )
}
