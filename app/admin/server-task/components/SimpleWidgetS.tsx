'use client'
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { startTransition, useEffect, useRef, useState } from 'react';
import { FcCheckmark, FcList } from 'react-icons/fc';
import { Task } from '@prisma/client';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { EditTaskS } from './EditTaskS';
import { FaMapPin } from 'react-icons/fa';
import { toast } from 'sonner';
import { useOptimistic } from 'react'


interface Props {
  task: Task;
  toggleTask: (id: string, completed: boolean) => Promise<Task | {message:string}>;
}


export const SimpleWidgetS = ({task, toggleTask} : Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { description, date} = task;
  const dateFormat = new Intl.DateTimeFormat('es', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');  
  /**
 * Utiliza un comportamiento optimista para manejar el estado de una tarea.
 *
 * useOptimistic es un hook que permite actualizar el estado local de la tarea
 * anticipadamente antes de recibir la confirmación del servidor. Esto mejora la 
 * experiencia del usuario al proporcionar una respuesta inmediata.
 *
 * @param task - La tarea actual que se va a manejar.
 * @param callback - Función para cambiar el estado de la tarea en el servidor, recibe el estado actual @param state y @param newCompleteValue el nuevo valor.
 */
const [taskOptimistic, toggleTaskOptimistic] = useOptimistic(task, (state, newCompleteValue:boolean) => ({ ...state, completed: newCompleteValue }));

// Obtenemos el estado de completado de la tarea optimista
const { completed } = taskOptimistic;

const onToggle = async () => {
  // Actualizamos optimísticamente el estado de la tarea localmente
  startTransition(() => toggleTaskOptimistic(!taskOptimistic.completed));

  // Intentamos actualizar el estado de la tarea en el servidor
  //! Se puede probar cambiando task.id por otro valor o !completed por algo que no sea booleano
  const res = await toggleTask(task.id, !completed);
  
  // Si hay un mensaje de error, mostramos una notificación y revertimos el cambio optimista
  if ('message' in res) {
    toast.error(`[SERVER-ACTION] : ${res.message}`, { duration: 1000 });
    return;
  }
  
  // Si la actualización fue exitosa, mostramos una notificación de éxito
  toast.success('[SERVER-ACTION] : Task updated successfully', { duration: 1000 });
};



  useEffect(() => {
    if(contentRef.current === null) return;
    setContentHeight(isCollapsed ? '64px' : `${contentRef.current.scrollHeight}px`);
  }, [isCollapsed]);

  return (
    <div style={{gridColumn: !completed ? '1/2' : '2/3'}} className={cn("flex flex-col relative h-fit border border-zinc-200 bg-amber-100 shadow-xl p-3 sm:min-w-[25%] rounded-2xl mx-2 col-end-1", completed && "bg-green-500/20 border-green-200")}>
    <div className="flex flex-col">
      <div className=" flex flex-row flex-1 gap-2 justify-between items-start">
        <span className='flex flex-row gap-2 items-center ps-6'>
          <FaMapPin  size={24} className={cn("text-zinc-500 absolute top-1 left-2", !completed && "text-red-300", completed && "text-green-700")}/>
          <h2 className="font-bold text-xl text-gray-600">
            <EditTaskS task={task}/>
          </h2>
        </span>
        <div onClick={onToggle}  className="cursor-pointer">
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
        {/* <ConfirmActionModal description="¿Estás seguro de que quieres eliminar esta tarea?" title="Eliminar tarea" onCallback={onCallback(task.id)}>
          <LiaTrashAltSolid size={24} className="cursor-pointer text-red-300"/>
        </ConfirmActionModal> */}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className={cn("text-yellow-600 text-xs focus:outline-none flex flex-row items-center justify-center", completed && "text-green-700")}>
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
    </div>
  </div>
  )
}

