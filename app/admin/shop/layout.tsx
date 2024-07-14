import HeaderShop from '../components/navigation/HeaderShop';


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="p-2 w-full overflow-y-auto no-scrollbar">
        <HeaderShop/>
        {children}
      </div>
    </div>
  );
}