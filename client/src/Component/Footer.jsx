import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

const Footer = () => {
  const {loggedInUser} = useContext(MyContext);
  return (
    <div>
      Footer
      <p>{loggedInUser.name}</p>
      <p>{loggedInUser.email}</p>
    </div>
  )
}

export default Footer
