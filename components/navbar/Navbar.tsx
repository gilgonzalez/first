import { HomeIcon, MailIcon, ReportIcon, RubyIcon } from '@primer/octicons-react';
import React from 'react';
import { ActiveLink } from '..';
//create navbar items in an array of objects with path and name
const navbarItems = [
  { path: '/', children: <><HomeIcon size={ 16 } />Home</> },
  { path: '/contact', children: <><MailIcon size={ 16 } />Contacto</> },
  { path: '/about', children: <><ReportIcon size={ 16 } />Sobre nosotros</> },
  { path: '/pricing', children: <><RubyIcon size={ 16 } />Precios</> }
];

export const Navbar = () => {
  return (
    <nav className="flex flex-row font-bold justify-around items-center h-14 bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      {
        navbarItems.map( ({children, path}) => (
          <ActiveLink key={path} children={children} path={path}/>
        ) )
      }
    </nav>
  );
};