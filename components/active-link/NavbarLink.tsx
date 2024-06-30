'use client';
import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string,
  title: string,
  icon : JSX.Element,
  className?: string;
}

export const NavbarLink = ( { path, title, icon, className = '' }: Props ) => {

  const isActive = usePathname() === path;
  return (
    <Link href={ path }>
        <span className={ `${className} ${ style.link } ${ isActive && style[ 'active-link' ] }` }>
          <div className="flex flex-row items-center justify-start flex-1 gap-2 px-2">
            {icon}
            <span className="flex flex-col ">
              <p className="font-bold hidden md:block">{title}</p>
            </span>
          </div>

        </span>
    </Link>
  );
};