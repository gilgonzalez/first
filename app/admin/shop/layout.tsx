import HeaderShop from '../components/navigation/HeaderShop';


export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full overflow-y-auto no-scrollbar min-h-screen">
        <HeaderShop/>
        {children}
      </div>
    </div>
  );
}