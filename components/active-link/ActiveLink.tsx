'use client';
import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string,
  children: React.ReactNode;
  className?: string;
}

export const ActiveLink = ( { path, children, className = '' }: Props ) => {

  const isActive = usePathname() === path;
  return (
    <Link href={ path }>
      <span className={ `${className} ${ style.link } ${ isActive && style[ 'active-link' ] }` }>
        { children }
      </span></Link>
  );
};