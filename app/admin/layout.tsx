import Sidebar from './components/navigation/Sidebar';

export default function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-full w-full">
      <Sidebar/>
      <div className="p-2 w-full">
        {children}
      </div>
    </div>
  );
}