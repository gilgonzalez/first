'use client'

import { signIn } from 'next-auth/react'
import React from 'react'
import { IoLogInOutline } from 'react-icons/io5'

const SignInButton = () => {
  return (
    <button onClick={()=>signIn()} className='fixed top-2 right-2 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-white hover:bg-emerald-700 transition-all duration-300'>
        <IoLogInOutline size={32} className="cursor-pointer text-white"/>
      </button>
  )
}

export default SignInButton