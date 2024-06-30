import Link from 'next/link';
import WidgetGrid from './WidgetGrid';
import Image from 'next/image';

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
      
      <div className="grid grid-cols-4 gap-2"> 
        {
          characters.map((character: Character) => {
            const name = character.name.replace(" ", "_")
            return (
              <div key={character.name} className="flex flex-col items-center rounded-md shadow-md">
                <Link href={`/admin/dashboard/${name}`}>
                  <Image className="rounded-md w-full" src={character.image} alt={character.name} width={100} height={100}/>
                  <span>{character.name}</span>
                </Link>
              </div>
            )
          } )
        }
      </div>
      <WidgetGrid/>
    </div>
  )
}
export default DashboardPage