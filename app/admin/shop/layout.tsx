import HeaderShop from '../components/navigation/HeaderShop';


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full ">
      <div className="w-full overflow-y-auto no-scrollbar">
        <HeaderShop/>
        {children}
      </div>
    </div>
  );
}