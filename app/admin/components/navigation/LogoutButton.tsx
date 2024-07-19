import { IoLogOutOutline } from 'react-icons/io5';
import { signOut } from '@/auth';
const LogoutButton =  () => {
  
  return (
    <button onClick = {()=>signOut()} >
      <IoLogOutOutline size={20} className="cursor-pointer text-red-700"/>
    </button>
  )
}

export default LogoutButton