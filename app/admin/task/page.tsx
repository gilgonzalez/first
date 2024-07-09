
import prisma from '@/lib/prisma';
import { EditTask } from './components/EditTask';
import GridWidget from './components/GridWidget';

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};


const DashboardPage = async () => {

  const tasks = await prisma.task.findMany({orderBy: {date: 'desc'}})

  return (
    <div className="text-black relative">
      <h1 className="mt-2 text-3xl font-bold">Tareas</h1>
      <span className="text-xl">Panel de tareas a realizar</span>
      <div className="absolute w-24 top-0 right-0 text-xs font-medium p-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 transition-all duration-300">
        <EditTask/>
        
      </div>
      
      <GridWidget tasks={tasks} />
      
    </div>
  )
}
export default DashboardPage