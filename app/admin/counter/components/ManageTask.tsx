'use client'
import { useState } from 'react';
import { AddTaskButton, DeleteTaskButton } from '.';
import { usetaskStore } from '@/app/store/task';

interface Props {
  value?: number | 0
}

export const ManageTask = ({value = 0} : Props) => {
  const [n, setN] = useState(value)
  const totalTask = usetaskStore(state => state.totalTask)
  const handleN = (n : number)=> {
    setN(prev => prev + n)
  }
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