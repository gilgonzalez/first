
'use client'
import { Task } from '@prisma/client';

export const updateTaskComplete = async (id: string, completed: boolean): Promise<Task> => {
  
  let body = {completed};

  const response = await fetch(`/api/task/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const taskUpdate = await response.json();
  return taskUpdate;

}

export const updateTask = async (id: string, description:string, name:string): Promise<Task> => {
  
  let body = {description, name};

  const response = await fetch(`/api/task/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const taskUpdate = await response.json();
  return taskUpdate;

}

export const createTask = async (description:string, name:string): Promise<Task> => {
  
  const body = {description, name};

  const response = await fetch(`/api/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const taskUpdate = await response.json();
  return taskUpdate;

}

export const deleteTask = async (id: string): Promise<Task> => {

  const response = await fetch(`/api/task/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const taskUpdate = await response.json();
  return taskUpdate;

}

export const deleteAllCompletedTasks = async (): Promise<Task> => {

  const response = await fetch(`/api/task`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const result = await response.json();
  return result;

}


