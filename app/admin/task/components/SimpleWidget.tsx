'use client'
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FcCheckmark, FcList } from 'react-icons/fc';
import { Task } from '@prisma/client';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { EditTask } from './EditTask';
import { FaMapPin } from 'react-icons/fa';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { deleteTask } from '@/app/helpers/tasks';
import { ConfirmActionModal } from '../../components/global/ConfirmActionModal';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface Props {
  task: Task;
  toggleTask: (id: string, completed: boolean) => void;
}


export const SimpleWidget = ({task, toggleTask} : Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {completed, description, date} = task;
  const dateFormat = new Intl.DateTimeFormat('es', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  const router = useRouter();

  useEffect(() => {
    if(contentRef.current === null) return;
    setContentHeight(isCollapsed ? '64px' : `${contentRef.current.scrollHeight}px`);
  }, [isCollapsed]);

    const onCallback = (id: string) => () => {
      deleteTask(id).then(task => {
        toast.success(`Task ${task.name} deleted`,{duration:1000});
        router.refresh();
      });
    }
  return (
    <div style={{gridColumn: !completed ? '1/2' : '2/3'}} className={cn("flex flex-col relative h-fit border border-zinc-200 bg-amber-100 shadow-xl p-3 sm:min-w-[25%] rounded-2xl mx-2 col-end-1", completed && "bg-green-500/20 border-green-200")}>
    <div className="flex flex-col">
      <div className=" flex flex-row flex-1 gap-2 justify-between items-start">
        <span className='flex flex-row gap-2 items-center ps-6'>
          <FaMapPin  size={24} className={cn("text-zinc-500 absolute top-1 left-2", !completed && "text-red-300", completed && "text-green-700")}/>
          <h2 className="font-bold text-xl text-gray-600">
            <EditTask task={task}/>
          </h2>
        </span>
        <div onClick={()=>toggleTask(task.id, !completed)}  className="cursor-pointer">
          {completed ? <FcCheckmark color='gray' className='hover:opacity-50  ' size={24} /> : <IoCheckmarkSharp size={24}   className='hover:text-emerald-500 hover:opacity-50 '/>}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 mt-2">
        <div id="temp" className="flex flex-1 flex-col gap-4 justify-between transition-colors duration-500">
          <div
            ref={contentRef}
            style={{ maxHeight: contentHeight }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <h4 className={cn("italic text-xs text-muted-foreground text-pretty max-h-fit", completed && "line-through")}>
              {description}
            </h4>
            <p className='text-xs text-muted-foreground text-right'>{dateFormat}</p>
          </div>
        </div>
      </div>
      <div className={cn("w-full flex justify-end text-right border-t border-gray-100 mt-2", completed && "border-green-500", !completed && "border-yellow-500")}>
        <ConfirmActionModal description="¿Estás seguro de que quieres eliminar esta tarea?" title="Eliminar tarea" onCallback={onCallback(task.id)}>
          <LiaTrashAltSolid size={24} className="cursor-pointer text-red-300"/>
        </ConfirmActionModal>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className={cn("text-yellow-600 text-xs focus:outline-none flex flex-row items-center justify-center", completed && "text-green-700")}>
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
    </div>
  </div>
  )
}

