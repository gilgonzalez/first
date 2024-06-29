import { redirect } from 'next/navigation';

const AdminPage = () => {
  redirect('/admin/dashboard')
  return (
    <div className="bg-yellow-300 flex flex-1">AdminPage</div>
  )
}
export default AdminPage