import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';


export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',

};

const Dashboard = async () => {

  const session = await auth();

  if(!session){
    redirect('/contact')
  }

  return (
    <div className="p-4">
      
        <div className="flex flex-row shadow-xl p-4 rounded-lg bg-slate-200 gap-4 w-fit">
          <Image
            src={session?.user?.image ?? 'https://github.com/shadcn.png'}
            alt={session?.user?.name ?? 'avatar'}
            width={64}
            height={64}
            className="rounded-full"
          />
          <span className="flex flex-col items-start justify-between">
            <h2 className="text-xl font-bold">Usuario conectado Server Side</h2>
            <p className="text-xs text-slate-500">{session?.user?.name}</p>
            <p className="text-xs text-slate-500">{session?.user?.email}</p>
          </span>
        </div>
      </div>
    
  );
};

export default Dashboard;
