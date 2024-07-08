
import Link from 'next/link';
import prisma from '@/lib/prisma';
import GridWidget from './components/GridWidget';

export const metadata = {
 title: 'Dashboard',
 description: 'Dashboard',
};


const DashboardPage = async () => {

  const tasks = await prisma.task.findMany({orderBy: {date: 'desc'}})
  
  

  return (
    <div className="text-black relative">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <Link
        href="/admin/task" 
        className=" absolute top-2 right-2 text-xs font-medium p-1 rounded-md bg-sky-500 text-white hover:bg-sky-700 transition-all duration-300">
          New Task
      </Link>
      <GridWidget tasks={tasks} />
      
    </div>
  )
}
export default DashboardPage