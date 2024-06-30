'use client'
import { usetaskStore } from '@/app/store/task';
import Link from 'next/link';
import { FcList } from 'react-icons/fc';

export const SimpleWidget = () => {
  const totalTask = usetaskStore(state => state.totalTask)
  
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        <div className=" flex flex-row gap-2 justify-center items-center ">
          <FcList  size={24}/>
          <h2 className="font-bold text-xl text-gray-600">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{totalTask}</h4>
            </div>
            
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link href="/admin/counter" className="text-indigo-600 text-xs font-medium">Más</Link>
        </div>
        
      </div>
    </div>
  )
}