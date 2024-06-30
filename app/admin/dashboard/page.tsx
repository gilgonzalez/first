import { SimpleWidget } from '../components/SimpleWidget';

const DashboardPage = () => {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <div className="flex flex-wrap gap-4 justify-center">
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
        <SimpleWidget/>
      
      </div>
    </div>
  )
}
export default DashboardPage