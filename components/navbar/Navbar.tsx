import Link from 'next/link';
import { FcAbout, FcAssistant, FcContacts, FcHome, FcMoneyTransfer } from 'react-icons/fc';
import { NavbarLink } from '../active-link/NavbarLink';
import LogInButton from '@/app/admin/components/navigation/LogInButton';
import { auth } from '@/auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from 'next-auth/react';
import LogoutButton from '@/app/admin/components/navigation/LogoutButton';

const navbarItems = [
  { path: '/contact', title:'Contacto', icon:  <FcContacts  size={20}/> },
  { path: '/about',  title:'Sobre nosotros', icon:  <FcAbout size={20}/>  },
  { path: '/pricing',  title:'Precios', icon: <FcMoneyTransfer size={20}/> },

]

export const Navbar = async () => {
  const session = await auth()
  console.log({session})
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
          {!session &&<LogInButton/>}
          {session &&(
            <span className="flex flex-row gap-4">
              <a href="/admin/dashboard" className="flex items-center justify-center rounded ml-2 bg-white p-2 text-white hover:bg-white/50 transition-all">
                <FcAssistant />
              </a>
              <LogoutButton/>
            </span>
          )}
        </span>
    </nav>
  );
};