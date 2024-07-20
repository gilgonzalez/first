'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import { IoLogInOutline } from 'react-icons/io5'

const LogInButton = () => {
  return (
    <button onClick = {()=>signIn()} >
        <IoLogInOutline size={32} className="cursor-pointer text-white"/>
      </button>
  )
}

export default LogInButton