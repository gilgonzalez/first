'use client'
import { Task } from '@prisma/client';
import React from 'react'
import { SimpleWidget } from './SimpleWidget';
import { useRouter } from 'next/navigation';
import * as api from '@/app/helpers/tasks';
import { toast } from 'sonner';

interface Props {
  tasks: Task[];
} 

const GridWidget = ({tasks} : Props) => {

  const router = useRouter();



  const toggleTask = async (id: string, completed: boolean) => {
    const updatedTask = await api.updateTodo(id, completed);
    if(completed){

      toast.success(`Task ${updatedTask.name} completed`,{duration:1500});
    } else {
      toast.error(`Task ${updatedTask.name} not completed`,{duration:1500});
    }
    router.refresh();
  }
  return (
    <div className="flex flex-wrap gap-4 justify-start mt-4">
        {
          tasks.map((task, index) => {
            return (
              <SimpleWidget key={index} task={task} toggleTask={toggleTask}/>
            )
          })
        }
      </div>
  )
}

export default GridWidget