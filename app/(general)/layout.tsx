import { Navbar } from '@/components';


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}