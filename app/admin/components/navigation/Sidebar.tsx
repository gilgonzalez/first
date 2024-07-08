'use client'
import {  ProjectSymlinkIcon } from '@primer/octicons-react';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronLeft } from 'lucide-react';
import { ActiveLink } from '@/components/active-link/ActiveLink';
import { useState } from 'react';
import { FcBiohazard, FcCalendar, FcLikePlaceholder, FcNews, FcPaid } from 'react-icons/fc';

const sidebarItems = [
  { path: '/admin/dashboard', description:'Informacion de tareas y agenda', title:'Dashboard', icon:  <FcNews  size={20} /> },
  { path: '/admin/task', description:'Contador de tareas diarias', title:'Tasks', icon:  <FcCalendar  size={ 20 }/>  },
  { path: '/admin/anime', description:'Informacion de Kimetsu no Yaiba', title:'Anime', icon:  <FcBiohazard   size={20} /> },
  { path: '/admin/products', description:'Listado y manejo de productos', title:'Productos', icon: <FcPaid  size={20}/> },
  { path: '/admin/favorites', description:'Marcados como favoritos', title:'Likes', icon:  <FcLikePlaceholder  size={20} /> },
  { path: '/contact', description:'Página web vista cliente', title:'Go to site', icon:  <ProjectSymlinkIcon size={20} /> },
];



const Sidebar = () => {

  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <ChevronLeft className="place-self-start"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 bg-slate-200" side={'left'}>
        <SheetHeader >
        <div className="flex flex-row gap-2 items-center mb-4">
        <Image
          src="https://github.com/shadcn.png" className="rounded-full" alt={ 'avatar' } width={45} height={45}/>
        <p>Bienvenido, Hector</p>
        </div>
        </SheetHeader>
        {
        sidebarItems.map( ({icon, path, description, title}, index) => (
          <div onClick={() => setSheetOpen(false)} key={path} className={`${index === sidebarItems.length -1 && 'mt-auto'}`}>
              <ActiveLink  path={path} description={description} title={title} icon={icon}/>
          </div>
        ) )
      }
      </SheetContent>
    </Sheet>
  )
}
export default Sidebar