'use client';

import { DialogHeader, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { IoTrashOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Task } from '@prisma/client';
import { toast } from 'sonner';
import { addTask, deleteTask } from '@/app/helpers/actions/task-actions';

interface Props {
  task?: Task | null;
}



export const EditTaskS = ({task}: Props) => {

  const [open, setOpen] = useState(false);
  const { name, description } = task || {};
  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const description = formData.get('description') as string;
    const name = formData.get('name') as string;
    if(description === '' || name === ''){
      toast.error(`Please fill all the fields`, {duration:1000});
      return;
    }
    const res = await addTask(name, description, task?.id)
    if('message' in res){
      toast.error(`[SERVER-ACTION] : ${res.message}`)
      return;
    }
    toast.success('[SERVER-ACTION] : Task created successfully')
    if(!task?.id) {
      setNameValue('')
      setDescriptionValue('')
    };
    setOpen(false);
  }
  const handleDelete = async () => {
    if(!task){
      setOpen(false)
      return
    }
    const res = await deleteTask(task.id)
    if('message' in res){
      toast.error(`[SERVER-ACTION] : ${res.message}` , {duration:1000})
      return;
    }
    toast.success('[SERVER-ACTION] : Task deleted successfully', {duration:1000})
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="">{task?.name || 'Nueva tarea'}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nueva tarea</DialogTitle>
          <DialogDescription>
            Crea una nueva tarea que se añadirá a la lista de tareas
          </DialogDescription>
        </DialogHeader>
        <form className='flex flex-col w-full gap-2' onSubmit={onSubmit}>
          <label htmlFor="name" className="text-sm">Nombre</label>
          <input type="text"
            id='name'
            name='name'
            value = {nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            className="text-sm w-6/12  pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
            placeholder="Ir de compras ..." />
          <label htmlFor="description" className="text-sm">Descripción</label>
          
          <textarea 
            onChange={(e) => setDescriptionValue(e.target.value)}
            value={descriptionValue} 
            name="description" 
            placeholder="Description..." 
            className="text-sm p-3 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all" id="description"/>
          <span className='flex flex-row gap-2 justify-end'>
            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
              {task ? 'Modificar' : 'Crear'}
            </button>
            <button
              onClick={ handleDelete }
              type='button' 
              className=" flex items-center justify-center rounded bg-red-500 p-2 text-white hover:bg-red-700 transition-all ">
              <IoTrashOutline />
              Delete
            </button>
          </span>


        </form>
      </DialogContent>
    </Dialog>
  );
};