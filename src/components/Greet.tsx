import React from 'react'

type GreetProps = {
  name: string,
  messageCount?: number,
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {

  const { name, messageCount = 0, isLoggedIn } = props;

  return (
    <div>{
      isLoggedIn
        ? `Hello ${name} ${messageCount}`
        : "Welcome guest"
    }</div>
  )
}
