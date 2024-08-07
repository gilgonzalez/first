'use client'
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from 'next-auth/react';
const LogoutButton =  () => {
  
  return (
    <button onClick = {()=>signOut()} >
      <IoLogOutOutline size={32} className="cursor-pointer text-red-700"/>
    </button>
  )
}

export default LogoutButton