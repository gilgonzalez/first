'use server'

import prisma from '@/lib/prisma';
import { Task } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const sleep = (sec: number) => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

export const toggleTask = async (id: string, completed: boolean) : Promise<Task | {message:string}> => {
  
  await sleep(1)
  const task = await prisma.task.findFirst({
    where: {
      id: id
    }
  })

  if(!task){
    return {message: 'Task not found'};
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: id
    },
    data: {
      completed
    }
  })

  revalidatePath('/admin/server-task')
  return updatedTask;
}

export const addTask = async (name:string, description:string, id?:string) : Promise<Task | {message:string}> => {
  
  try{
    const task = await prisma.task.upsert({
      where: {
        id: id ?? '', // Replace with appropriate unique identifier if needed
      },
      create: {
        name,
        description,
        completed: false
      },
      update: {
        name,
        description,
      }
    })
    revalidatePath('/admin/server-task')
    return task;
  }catch(err : any){
    console.log(err)
    return {
      message: err.message
    }
  }
}

export const deleteTask = async (id:string) : Promise<Task | {message:string}> => {
  try{
    const task = await prisma.task.delete({
      where: {
        id
      }
    })
    revalidatePath('/admin/server-task')
    return task;
  }catch(err : any){
    console.log(err)
    return {
      message: err.message
    }
  }
}

export const deleteAllCompletedTasks = async (): Promise<boolean> => {

  const response = await prisma.task.deleteMany({
    where: {
      completed: true
    }
  })
  revalidatePath('/admin/server-task')
  return response.count > 0;
}