
'use client'
import { Task } from '@prisma/client';

export const updateTodo = async (id: string, completed: boolean): Promise<Task> => {
  
  const body = {completed};

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