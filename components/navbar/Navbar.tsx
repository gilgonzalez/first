import { HomeIcon, MailIcon, ReportIcon, RubyIcon } from '@primer/octicons-react';
import React from 'react';
import { ActiveLink } from '..';
import Link from 'next/link';
import style from './HomeLink.module.css';
//create navbar items in an array of objects with path and name
// const navbarItems = [
//   { path: '/contact', children: <><MailIcon size={ 16 } />Contacto</> },
//   { path: '/about', children: <><ReportIcon size={ 16 } />Sobre nosotros</> },
//   { path: '/pricing', children: <><RubyIcon size={ 16 } />Precios</> }
// ];
const navbarItems = [
  { path: '/contact', title:'Contacto', icon:  <MailIcon size={20} /> },
  { path: '/about',  title:'Sobre nosotros', icon:  <ReportIcon size={ 20 }/>  },
  { path: '/pricing',  title:'Precios', icon: <RubyIcon size={20} /> },

]

export const Navbar = () => {
  return (
    <nav className="flex flex-row font-bold justify-between items-center h-14 bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link className={style.homelink } href={'/'}>
          <HomeIcon size={ 16 } />Home
        </Link>
        <span className="flex flex-row gap-4">
          { 
            navbarItems.map( ({title, icon, path}) => (
              <ActiveLink  key={path} path={path} title={title} icon={icon}/>
            ) )
          }
        </span>
    </nav>
  );
};