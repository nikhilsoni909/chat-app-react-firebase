import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.js'
import { AuthContext } from '../context/AuthContext.js'
const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo"> NIK Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => {
          window.location.reload();
          signOut(auth)
          window.location.reload();
        }}>logout</button>
      </div>
    </div>
  )
}

export default Navbar