'use client'
import Link from 'next/link';
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';

interface Props {
  path: string,
  children: React.ReactNode
}

export const ActiveLink = ({path, children}:Props) => {

  const isActive = usePathname() === path;
  return (
    <Link href={ path } children={ 
      <span className={` ${style.link} ${isActive && style['active-link']}`}>
        { children }
      </span> } 
    />
  )
}