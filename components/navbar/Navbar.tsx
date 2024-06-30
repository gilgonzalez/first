import Link from 'next/link';
import { FcAbout, FcContacts, FcHome, FcMoneyTransfer } from 'react-icons/fc';
import { ActiveLink } from '../active-link/ActiveLink';
import { NavbarLink } from '../active-link/NavbarLink';

const navbarItems = [
  { path: '/contact', title:'Contacto', icon:  <FcContacts  size={20}/> },
  { path: '/about',  title:'Sobre nosotros', icon:  <FcAbout size={20}/>  },
  { path: '/pricing',  title:'Precios', icon: <FcMoneyTransfer size={20}/> },

]

export const Navbar = () => {
  return (
    <nav className="flex flex-row font-bold text-white justify-between items-center h-14 bg-blue-900/80  p-2 m-2 rounded">
        <Link className="flex flex-row gap-2 items-center text-white"  href={'/'}>
          <FcHome  size={ 20 } />Home
        </Link>
        <span className="flex flex-row gap-4">
          { 
            navbarItems.map( ({title, icon, path}) => (
              <NavbarLink  key={path} path={path} title={title} icon={icon}/>
            ) )
          }
        </span>
    </nav>
  );
};