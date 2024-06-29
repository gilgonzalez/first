'use client';
import Link from 'next/link';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  path: string,
  title: string,
  icon : JSX.Element,
  className?: string;
  description?: string | null;
}

export const ActiveLink = ( { path, title, icon, className = '', description = null }: Props ) => {

  const isActive = usePathname() === path;
  return (
    <Link href={ path }>
        <span className={ `${className} ${ style.link } ${ isActive && style[ 'active-link' ] }` }>
          {icon}
          <div>
            <p className="font-bold">{title}</p>
            {description && <p className={` ${isActive && 'text-blue-900 font-semibold'} hover:font-semibold hover:text-blue-900 text-xs text-slate-400`}>{description}</p>}
          </div>

        </span>
    </Link>
  );
};