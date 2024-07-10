export const dynamic = 'force-dynamic'
export const revalidate = 0

import React from 'react'

import prisma from '@/lib/prisma';
import { EditTaskS } from './components/EditTaskS';
import GridWidgetS from './components/GridWidgetS';


export const metadata = {
  title: 'Server-Actions',
  description: 'Description para el Server-Actions',
};

const page = async() => {

  const tasks = await prisma.task.findMany({orderBy: {updateTime: 'desc'}})
  return (
    <div className="text-black relative">
    <h1 className="mt-2 text-3xl font-bold">Server Actions <span className="text-pink-600">(Optimistic UI)</span></h1>
    <span className="text-xl">Panel de tareas a realizar</span>
    <div className="absolute w-24 top-0 right-0 text-xs font-medium p-2 rounded-md bg-sky-500 text-white hover:bg-sky-700 transition-all duration-300">
      <EditTaskS/>
      
    </div>
    
    <GridWidgetS tasks={tasks} />
    
  </div>
  )
}

export default page
