import { ActiveLink } from '@/components';
import { ProjectIcon, ProjectSymlinkIcon, ReportIcon } from '@primer/octicons-react';
import Image from 'next/image';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";



const sidebarItems = [
  { path: '/admin/dashboard', description:'Informacion de tareas y agenda', title:'Dashboard', icon:  <ProjectIcon size={20} /> },
  { path: '/admin/counter', description:'Contador de tareas diarias', title:'Counter', icon:  <ReportIcon size={ 20 }/>  },
  { path: '/admin/product', description:'Listado y manejo de productos', title:'Productos', icon: <MdOutlineProductionQuantityLimits size={20}/> },
  { path: '/contact', description:'Página web vista cliente', title:'Go to site', icon:  <ProjectSymlinkIcon size={20} /> },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col w-[300px] bg-slate-900 p-4 gap-4">
      <div className="flex flex-row gap-2 items-center mb-4">
        <Image
          src="https://github.com/shadcn.png" className="rounded-full" alt={ 'avatar' } width={45} height={45}/>
        <p>Bienvenido, Hector</p>
      </div>
      {
        sidebarItems.map( ({icon, path, description, title}, index) => (
          <div  key={path} className={`${index === sidebarItems.length -1 && 'mt-auto'}`}>
            <ActiveLink  path={path} description={description} title={title} icon={icon}/>
          </div>
        ) )
      }
    </nav>
  )
}
export default Sidebar