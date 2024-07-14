import Sidebar from './components/navigation/Sidebar';

export default function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full ms-4 ">
      <Sidebar/>
      <div className=" overflow-y-auto no-scrollbar">
        {children}
      </div>
    </div>
  );
}