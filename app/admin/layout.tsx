import { auth } from '@/auth';
import Sidebar from './components/navigation/Sidebar';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth()
  if(!session){
    redirect('/api/auth/signin')
  }
  return (
    <div className="flex flex-col h-full ms-4 ">
      <Sidebar {...session?.user}/>
      <div className=" overflow-y-auto no-scrollbar h-full">
        {children}
      </div>
    </div>
  );
}