'use client'
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FcCheckmark, FcList } from 'react-icons/fc';
import { Task } from '@prisma/client';
import { IoCheckmarkSharp } from 'react-icons/io5';

interface Props {
  task: Task;
  toggleTask: (id: string, completed: boolean) => void;
}


export const SimpleWidget = ({task, toggleTask} : Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const {completed, description, name, date} = task;
  const dateFormat = new Intl.DateTimeFormat('es', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    setContentHeight(isCollapsed ? '64px' : `${contentRef?.current?.scrollHeight}px`);
  }, [isCollapsed]);
  return (
    <div className={cn("flex flex-col h-fit bg-white shadow-xl p-3 sm:min-w-[25%] rounded-2xl border border-gray-50 mx-2", completed && "bg-green-500/20")}>
    <div className="flex flex-col">
      <div className="flex flex-row flex-1 gap-2 justify-between items-start">
        <span className='flex flex-row gap-2 items-center'>
          <FcList size={24} />
          <h2 className="font-bold text-xl text-gray-600">{name}</h2>
        </span>
        <div onClick={()=>toggleTask(task.id, !completed)}  className="cursor-pointer">
          {completed ? <FcCheckmark color='gray' className='hover:opacity-50  ' size={24} /> : <IoCheckmarkSharp size={24}   className='hover:text-emerald-500 hover:opacity-50 '/>}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 mt-4">
        <div id="temp" className="flex flex-1 flex-col gap-4 justify-between transition-colors duration-500">
          <div
            ref={contentRef}
            style={{ maxHeight: contentHeight }}
            className="overflow-hidden transition-all duration-500 ease-in-out"
          >
            <h4 className="italic text-xs text-muted-foreground text-pretty max-w-72 max-h-fit">
              {description}
            </h4>
            <p className='text-xs text-muted-foreground text-right'>{dateFormat}</p>
          </div>
        </div>
      </div>
      <div className={cn("w-full flex justify-end text-right border-t border-gray-100 mt-2", completed && "border-green-500")}>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-blue-600 text-xs focus:outline-none flex flex-row items-center justify-center">
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>
    </div>
  </div>
  )
}

