'use client'

import { useState } from 'react';
import { setCookie} from 'cookies-next';

interface Props {
  currentTab?: number;
  tabOptions?: string[];
}

const defaultTab = ['Cookies', 'Server-Actions', 'Settings', 'Profile', 'Logout'];
const Tab = ({tabOptions = defaultTab, currentTab = 0} : Props) => {

  const [selected, setselected] = useState(currentTab)

  const onTabSelected = (selectedTab: number) => {
    setselected(selectedTab)
    setCookie('selectedTab', selectedTab.toString())
  }
  return (
    <div className={`grid grid-cols-5 gap-2  space-x-2 rounded-xl bg-gray-200 p-2`}>

            {tabOptions.map((tab, index) => (
              <div key={tab}>
                <input 
                  // onChange={()=>{}} 
                  readOnly
                  checked={selected === index} 
                  type="radio" 
                  id={""+index} 
                  name="tabs" 
                  className="peer hidden" 
                />
                <label onClick={() => onTabSelected(index)} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white ">
                  {tab}
                </label>
              </div>
            ))}
          </div>
  )
}
export default Tab