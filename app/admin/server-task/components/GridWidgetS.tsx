'use client';
import { Task } from '@prisma/client';
import React from 'react';
import { SimpleWidgetS } from './SimpleWidgetS';
import { LiaTrashAltSolid } from 'react-icons/lia';
import { ConfirmActionModal } from '../../components/global/ConfirmActionModal';
import { deleteAllCompletedTasks, toggleTask } from '@/app/helpers/actions/task-actions';
import { toast } from 'sonner';

interface Props {
  tasks: Task[];
}

const GridWidgetS = ( { tasks }: Props ) => {

  const handleDeleteCompleted = async () => {
    const res = await deleteAllCompletedTasks()
    if(!res){
      toast.error(`[SERVER-ACTION] : Nothing to delete`, {duration:1000})
      return;
    }
    toast.success('[SERVER-ACTION] : All completed tasks deleted successfully' , {duration:1000})
  }


  return (
    <div className="flex flex-col w-full relative">
        
          <ConfirmActionModal 
            classContainerTrigger={'flex flex-row gap-2 text-xs absolute -top-8 right-0 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 px-2 p-1 w-24 rounded-md'} 
            description="¿Estás seguro de eliminar todas las tareas que aparecen como completadas?" 
            title="Eliminar Completados" 
            onCallback={ handleDeleteCompleted }>
            <LiaTrashAltSolid size={ 24 } className="cursor-pointer text-red-100" /> Limpìar
          </ConfirmActionModal>
        <div className="flex flex-wrap sm:grid-cols-2 gap-4 justify-start mt-4">
          <div className="flex flex-col flex-1 gap-4 lg:px-20">
            <h2 className="text-xl font-semibold underline underline-offset-2">Pendientes</h2>
            {
              tasks.filter( task => !task.completed ).map( ( task ) => {
                return (
                  <SimpleWidgetS key={ task.id } task={ task } toggleTask={ toggleTask } />
                );
              } )
            }
          </div>
          <div className="flex flex-col flex-1 gap-4 lg:px-20">
            <h2 className="text-xl font-semibold underline underline-offset-2">Completados</h2>
            {
              tasks.filter( task => task.completed ).map( ( task ) => {
                return (
                  <SimpleWidgetS key={ task.id } task={ task } toggleTask={ toggleTask } />
                );
              } )
            }
          </div>
        </div>
      
    </div>
  );
};

export default GridWidgetS;