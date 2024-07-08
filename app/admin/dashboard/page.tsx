import WidgetGrid from '../dashboard/WidgetGrid';

interface Character{
  name: string;
  image: string;
  url: string;
} 
const getCharacters = async () => {
  const response = await fetch('https://demon-slayer-api.onrender.com/v1/')
  const names = await response.json()

  return names;
}

const DashboardPage = async () => {

  const characters = await getCharacters()
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-xl">Informacion general</span>
      <WidgetGrid/>
    </div>
  )
}
export default DashboardPage