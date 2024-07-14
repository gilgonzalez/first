import Tab from './components/Tab';
import { cookies } from 'next/headers';



export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page',
};



const CookiesPage = () => {

  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
  const selectedTab = Number(cookieStore.get('selectedTab')?.value ?? 0);

  return (
    <div className="gap-4 p-4  text-slate-800">
        <div className="flex flex-col gap-8">
          <span className="text-3xl">Example Cookies Managing Tabs</span>
          <Tab currentTab={selectedTab}  />
          {JSON.stringify(allCookies)}
        </div>

    </div>
  );
};
export default CookiesPage;