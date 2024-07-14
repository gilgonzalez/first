import { auth } from '@/auth';
import Sidebar from './components/navigation/Sidebar';

export default async function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <div className="flex flex-col h-full ms-4 ">
      <Sidebar {...session?.user}/>
      <div className=" overflow-y-auto no-scrollbar h-full">
        {children}
      </div>
    </div>
  );
}