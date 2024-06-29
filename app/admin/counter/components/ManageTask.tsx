'use client'
import { useState } from 'react';
import { AddTaskButton, DeleteTaskButton } from '.';

interface Props {
  value?: number | 0
}

export const ManageTask = ({value = 0} : Props) => {
  const [n, setN] = useState(value)
  const handleN = (n : number)=> {
    setN(prev => prev + n)
  }
  return (
    <div className="flex flex-col gap-2 items-center">
      <span>Tareas totales : {n}</span>
      <div className=" flex flex-row gap-2">
        <AddTaskButton handleN={handleN}/>
        <DeleteTaskButton handleN={handleN}/>
      </div>
    </div>
  )
}