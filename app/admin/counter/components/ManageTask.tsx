'use client'
import { AddTaskButton, DeleteTaskButton } from '.';
import { usetaskStore } from '@/app/store/task';

export const ManageTask = () => {
  
  const totalTask = usetaskStore(state => state.totalTask)
  return (
    <div className="flex flex-col gap-2 items-center">
      <span>Tareas totales : {totalTask}</span>
      <div className=" flex flex-row gap-2">
        <AddTaskButton/>
        <DeleteTaskButton/>
      </div>
    </div>
  )
}