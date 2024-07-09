'use client';
import { Task } from '@prisma/client';
import React from 'react';
import { SimpleWidget } from './SimpleWidget';
import { useRouter } from 'next/navigation';
import * as api from '@/app/helpers/tasks';
import { toast } from 'sonner';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { ConfirmActionModal } from '../../components/global/ConfirmActionModal';

interface Props {
  tasks: Task[];
}

const GridWidget = ( { tasks }: Props ) => {

  const router = useRouter();

  const toggleTask = async ( id: string, completed: boolean ) => {
    const updatedTask = await api.updateTaskComplete( id, completed );
    if ( completed ) {
      toast.success( `Task ${ updatedTask.name } completed`, { duration: 1000 } );
    } else {
      toast.error( `Task ${ updatedTask.name } not completed`, { duration: 1000 } );
    }
    router.refresh();
  };
  const deleteCompleted = async () => {
    const deleteAction = await api.deleteAllCompletedTasks();
    toast.success( `Task ${ deleteAction.name } deleted`, { duration: 1000 } );
    router.refresh();
  };
  return (
    <div className="flex flex-col w-full relative">
        
          <ConfirmActionModal classContainerTrigger={'flex flex-row gap-2 text-xs absolute -top-8 right-0 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 px-2 p-1 w-24 rounded-md'} description="¿Estás seguro de eliminar todas las tareas que aparecen como completadas?" title="Eliminar Completados" onCallback={ deleteCompleted }>
            <LiaTrashAltSolid size={ 24 } className="cursor-pointer text-red-100" /> Limpìar
          </ConfirmActionModal>
        <div className="flex flex-wrap sm:grid-cols-2 gap-4 justify-start mt-4">
          <div className="flex flex-col flex-1 gap-4 lg:px-20">
            <h2>Pendientes</h2>
            {
              tasks.filter( task => !task.completed ).map( ( task ) => {
                return (
                  <SimpleWidget key={ task.id } task={ task } toggleTask={ toggleTask } />
                );
              } )
            }
          </div>
          <div className="flex flex-col flex-1 gap-4 lg:px-20">
            <h2>Completados</h2>
            {
              tasks.filter( task => task.completed ).map( ( task ) => {
                return (
                  <SimpleWidget key={ task.id } task={ task } toggleTask={ toggleTask } />
                );
              } )
            }
          </div>
        </div>
      
    </div>
  );
};

export default GridWidget;