import { usetaskStore } from '@/app/store/task';

export const AddTaskButton = () => {
  const addTask = usetaskStore(state => state.addTask)
  return (
    <button onClick={()=>addTask(1)} className="flex items-center justify-center py-2 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-300 transition-all duration-300">
      Crear
    </button>
  )
}